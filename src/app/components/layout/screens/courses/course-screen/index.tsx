import React, { useState, useEffect, useRef, useContext } from "react";
import cc from "classcat";
import { RouteComponentProps } from "react-router-dom";

// interfaces
import { ICourse, CourseState, IQuiz, IQuizBE } from "../courses.interface";
import { getCourseById, parseQuizListItem } from "../courses.utils";

// hooks
import useViewManager from "../../../../../hooks/useViewManager";

// context
import { TeachMeContext } from "../../../../../providers/TeachmeProvider";
import { ProgressBar } from "../../../../common/progress-bar";
import TMListItem from "../../../../common/list/list-item/teach-me-list-item";
import CourseItemsList from "../../../../common/list/course-items-list";

// styles
import "./styles.less";

type TParams = { courseId: string; taskId: string };

const timing = {
	init: 400,
	reset: 2000,
};

export default function CourseScreen({ match }: RouteComponentProps<TParams>) {
	const { courseId, taskId } = match.params;
	const {
		appState: {
			tmState: { tmCourses },
		},
	} = useContext(TeachMeContext);

	const [course, setCourse] = useState(null as ICourse);
	const [hasQuiz, setHasQuiz] = useState(false);
	const [selectedTaskId, setSelectedTaskId] = useState(null as number);

	const defaultCourseData = { status: 0, state: CourseState.NotStarted };
	const { animateCoreElements } = useViewManager();
	const courseSection = useRef<HTMLDivElement>(null);

	// TODO: buttonText - should deprecate soon
	const getQuizLabel = (quiz: IQuizBE) => {
		const { buttons, buttonText } = quiz.welcomeScreen;
		const quizButtonLabel = buttons ? buttons[0].text : buttonText;
		return quizButtonLabel;
	};

	// Using useEffect according to courseId
	useEffect(() => {
		setCourse(null);

		// Using setTimeout for set fadeInUp animation
		const timer = setTimeout(() => {
			const selectedCourse = getCourseById({
				tmCourses,
				id: parseInt(match.params.courseId),
			});

			if (selectedCourse) {
				setCourse(selectedCourse);
			}
		}, 0);

		return () => clearTimeout(timer);
	}, [courseId]);

	// Using useEffect according to taskId.
	// setting the taskId to highlight the list item
	useEffect(() => {
		// set selection for adding highlight className to element
		const timerIn = setTimeout(() => {
			setSelectedTaskId(parseInt(taskId));
		}, timing.init);

		// reset selection for removing highlight className
		const timerOut = setTimeout(() => {
			setSelectedTaskId(undefined);
		}, timing.reset);

		return () => {
			clearTimeout(timerIn);
			clearTimeout(timerOut);
		};
	}, [taskId]);

	// Using useEffect according to course & courseId.
	useEffect(() => {
		if (course) {
			animateCoreElements({
				elements: [courseSection.current],
				animateClassName: "fadeInUp",
				timeout: timing.init,
			});

			setHasQuiz(Boolean(course.quiz));
		}
	}, [course, courseId]);

	return (
		<section className="screen course-screen">
			{course && (
				<section
					ref={courseSection}
					className={cc(["course animated-element", { "with-quiz": hasQuiz }])}
				>
					<header className="course-information">
						<h3 className="screen-title">{course.title}</h3>
						<ProgressBar
							percentCompletion={
								course.data ? course.data.status : defaultCourseData.status
							}
							showPercentages
						/>
					</header>
					<div className="course-content">
						<div className="course-lessons-wrapper">
							<CourseItemsList
								items={course.items}
								selectedTaskId={selectedTaskId}
							/>
						</div>
						{hasQuiz && (
							<div className="course-quiz">
								<TMListItem
									item={parseQuizListItem({
										quiz: course.quiz,
										courseId: course.id,
									})}
									hideProgressBar
									overrideLabel={getQuizLabel(course.quiz)}
									hideButtonIcon
								/>
							</div>
						)}
					</div>
				</section>
			)}
		</section>
	);
}
