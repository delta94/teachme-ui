import {
  ICourseBE,
  CourseItemType,
} from "../components/layout/screens/courses/courses.interface";

export const mockDefaultData: ICourseBE[] = [
  {
    id: 64,
    title: "Completed and not tested",
    quiz: {
      welcomeScreen: {
        title: "Course Assessment",
        description:
          "Did you master this course? Use this quiz to assess your knowledge",
        buttonText: "Start Quiz",
      },
      failScreen: {
        title: "Sorry, you didn't pass this time",
        description:
          "Unfortunately, your score did not reach the passmark. Consider reviewing the course before you retake this quiz.",
        buttonText: "Go Back to Courses",
      },
      successScreen: {
        title: "Well Done!",
        description: "Congratulations! You&#39;ve passed the quiz!",
        buttonText: "Go Back to Courses",
      },
      questions: [
        {
          id: 580,
          type: 0,
          title:
            "This is a single answer question with a description and explanation",
          description: "Short description of the question",
          explanation: "You should have known this...",
          answers: [
            { id: 514, isCorrect: true, text: "This is the correct answer" },
            {
              id: 19,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
        {
          id: 769,
          type: 1,
          title:
            "This is a multiple answer question with no description or explanation",
          description: "Short description of the question",
          answers: [
            { id: 372, isCorrect: true, text: "This is a correct answer" },
            { id: 729, isCorrect: true, text: "This is also a correct answer" },
            {
              id: 728,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
      ],
      properties: {
        isCompleted: false,
        passmark: 100,
        resultsViewActive: true,
        isDisabled: false,
      },
    },
    items: [
      {
        type: "article" as CourseItemType.Article,
        id: 81,
        title: "Content article-81",
        description: "Description for article-81",
        properties: { isCompleted: true },
        courseId: 123,
      },
      {
        id: 320,
        title: "Hello and welcome to cool lesson 320",
        description: "This lesson is completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: true },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: true },
          },
        ],
        properties: { isDisabled: false, isCompleted: true },
        courseId: 435,
      },
      {
        id: 965,
        title: "Hello and welcome to cool lesson 965",
        description: "This lesson is completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: true },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: true },
          },
        ],
        properties: { isDisabled: false, isCompleted: true },
        courseId: 859,
      },
    ],
    properties: { isCompleted: true },
  },
  {
    id: 16,
    title: "Completed and tested",
    quiz: {
      welcomeScreen: {
        title: "Course Assessment",
        description:
          "Did you master this course? Use this quiz to assess your knowledge",
        buttonText: "Start Quiz",
      },
      failScreen: {
        title: "Sorry, you didn't pass this time",
        description:
          "Unfortunately, your score did not reach the passmark. Consider reviewing the course before you retake this quiz.",
        buttonText: "Go Back to Courses",
      },
      successScreen: {
        title: "Well Done!",
        description: "Congratulations! You&#39;ve passed the quiz!",
        buttonText: "Go Back to Courses",
      },
      questions: [
        {
          id: 580,
          type: 0,
          title:
            "This is a single answer question with a description and explanation",
          description: "Short description of the question",
          explanation: "You should have known this...",
          answers: [
            { id: 514, isCorrect: true, text: "This is the correct answer" },
            {
              id: 19,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
        {
          id: 769,
          type: 1,
          title:
            "This is a multiple answer question with no description or explanation",
          description: "Short description of the question",
          answers: [
            { id: 372, isCorrect: true, text: "This is a correct answer" },
            { id: 729, isCorrect: true, text: "This is also a correct answer" },
            {
              id: 728,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
      ],
      properties: {
        isCompleted: true,
        passmark: 100,
        resultsViewActive: true,
        isDisabled: false,
      },
    },
    items: [
      {
        id: 456,
        title: "Hello and welcome to cool lesson 456",
        description: "This lesson is completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: true },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: true },
          },
        ],
        properties: { isDisabled: false, isCompleted: true },
        courseId: 234,
      },
      {
        type: "smart-walkthru" as CourseItemType.WalkThru,
        id: 558,
        title: "Content smart-walkthru-558",
        description: "Description for smart-walkthru-558",
        properties: { isCompleted: true },
        courseId: 123,
      },
      {
        id: 383,
        title: "Hello and welcome to cool lesson 383",
        description: "This lesson is completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: true },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: true },
          },
        ],
        properties: { isDisabled: false, isCompleted: true },
        courseId: 333,
      },
    ],
    properties: { isCompleted: true },
  },
  {
    id: 997,
    title: "Ready to start",
    quiz: {
      welcomeScreen: {
        title: "Course Assessment",
        description:
          "Did you master this course? Use this quiz to assess your knowledge",
        buttonText: "Start Quiz",
      },
      failScreen: {
        title: "Sorry, you didn't pass this time",
        description:
          "Unfortunately, your score did not reach the passmark. Consider reviewing the course before you retake this quiz.",
        buttonText: "Go Back to Courses",
      },
      successScreen: {
        title: "Well Done!",
        description: "Congratulations! You&#39;ve passed the quiz!",
        buttonText: "Go Back to Courses",
      },
      questions: [
        {
          id: 580,
          type: 0,
          title:
            "This is a single answer question with a description and explanation",
          description: "Short description of the question",
          explanation: "You should have known this...",
          answers: [
            { id: 514, isCorrect: true, text: "This is the correct answer" },
            {
              id: 19,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
        {
          id: 769,
          type: 1,
          title:
            "This is a multiple answer question with no description or explanation",
          description: "Short description of the question",
          answers: [
            { id: 372, isCorrect: true, text: "This is a correct answer" },
            { id: 729, isCorrect: true, text: "This is also a correct answer" },
            {
              id: 728,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
      ],
      properties: {
        isCompleted: false,
        passmark: 100,
        resultsViewActive: true,
        isDisabled: false,
      },
    },
    items: [
      {
        id: 403,
        title: "Hello and welcome to cool lesson 403",
        description: "This lesson is not completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: false },
          },
        ],
        properties: { isDisabled: false, isCompleted: false },
        courseId: 272,
      },
      {
        type: "article" as CourseItemType.Article,
        id: 901,
        title: "Content article-901",
        description: "Description for article-901",
        properties: { isDisabled: false, isCompleted: false },
        courseId: 123,
      },
      {
        id: 232,
        title: "Hello and welcome to cool lesson 232",
        description: "This lesson is not completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: false },
          },
        ],
        properties: { isDisabled: false, isCompleted: false },
        courseId: 36,
      },
    ],
    properties: { isCompleted: false },
  },
  {
    id: 702,
    title: "This one is disabled",
    quiz: {
      welcomeScreen: {
        title: "Course Assessment",
        description:
          "Did you master this course? Use this quiz to assess your knowledge",
        buttonText: "Start Quiz",
      },
      failScreen: {
        title: "Sorry, you didn't pass this time",
        description:
          "Unfortunately, your score did not reach the passmark. Consider reviewing the course before you retake this quiz.",
        buttonText: "Go Back to Courses",
      },
      successScreen: {
        title: "Well Done!",
        description: "Congratulations! You&#39;ve passed the quiz!",
        buttonText: "Go Back to Courses",
      },
      questions: [
        {
          id: 580,
          type: 0,
          title:
            "This is a single answer question with a description and explanation",
          description: "Short description of the question",
          explanation: "You should have known this...",
          answers: [
            { id: 514, isCorrect: true, text: "This is the correct answer" },
            {
              id: 19,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
        {
          id: 769,
          type: 1,
          title:
            "This is a multiple answer question with no description or explanation",
          description: "Short description of the question",
          answers: [
            { id: 372, isCorrect: true, text: "This is a correct answer" },
            { id: 729, isCorrect: true, text: "This is also a correct answer" },
            {
              id: 728,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
      ],
      properties: {
        isCompleted: false,
        passmark: 100,
        resultsViewActive: true,
        isDisabled: false,
      },
    },
    items: [
      {
        id: 545,
        title: "Hello and welcome to cool lesson 545",
        description: "This lesson is not completed and unavailable",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: true, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: true, isCompleted: false },
          },
        ],
        properties: { isDisabled: true, isCompleted: false },
        courseId: 992,
      },
      {
        type: "video" as CourseItemType.Video,
        id: 91,
        title: "Content video-91",
        description: "Description for video-91",
        properties: { isDisabled: true, isCompleted: false },
        courseId: 123,
      },
      {
        id: 868,
        title: "Hello and welcome to cool lesson 868",
        description: "This lesson is not completed and unavailable",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: true, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: true, isCompleted: false },
          },
        ],
        properties: { isDisabled: true, isCompleted: false },
        courseId: 163,
      },
    ],
    properties: { isCompleted: false, isDisabled: true },
  },
  {
    id: 555,
    title: "Course with disabled lesson",
    quiz: {
      welcomeScreen: {
        title: "Course Assessment",
        description:
          "Did you master this course? Use this quiz to assess your knowledge",
        buttonText: "Start Quiz",
      },
      failScreen: {
        title: "Sorry, you didn't pass this time",
        description:
          "Unfortunately, your score did not reach the passmark. Consider reviewing the course before you retake this quiz.",
        buttonText: "Go Back to Courses",
      },
      successScreen: {
        title: "Well Done!",
        description: "Congratulations! You&#39;ve passed the quiz!",
        buttonText: "Go Back to Courses",
      },
      questions: [
        {
          id: 580,
          type: 0,
          title:
            "This is a single answer question with a description and explanation",
          description: "Short description of the question",
          explanation: "You should have known this...",
          answers: [
            { id: 514, isCorrect: true, text: "This is the correct answer" },
            {
              id: 19,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
        {
          id: 769,
          type: 1,
          title:
            "This is a multiple answer question with no description or explanation",
          description: "Short description of the question",
          answers: [
            { id: 372, isCorrect: true, text: "This is a correct answer" },
            { id: 729, isCorrect: true, text: "This is also a correct answer" },
            {
              id: 728,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
      ],
      properties: {
        isCompleted: false,
        passmark: 100,
        resultsViewActive: true,
        isDisabled: false,
      },
    },
    items: [
      {
        id: 342,
        title: "Hello and welcome to cool lesson 342",
        description: "This lesson is completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: true },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: true },
          },
        ],
        properties: { isDisabled: false, isCompleted: true },
        courseId: 838,
      },
      {
        id: 840,
        title: "Hello and welcome to cool lesson 840",
        description: "This lesson is not completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: false },
          },
        ],
        properties: { isDisabled: false, isCompleted: false },
        courseId: 43,
      },
      {
        id: 83,
        title: "Hello and welcome to cool lesson 83",
        description: "This lesson is not completed and unavailable",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: true, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: true, isCompleted: false },
          },
        ],
        properties: { isDisabled: true, isCompleted: false },
        courseId: 103,
      },
    ],
    properties: { isCompleted: false },
  },
  {
    id: 530,
    title: "Course with disabled item",
    quiz: {
      welcomeScreen: {
        title: "Course Assessment",
        description:
          "Did you master this course? Use this quiz to assess your knowledge",
        buttonText: "Start Quiz",
      },
      failScreen: {
        title: "Sorry, you didn't pass this time",
        description:
          "Unfortunately, your score did not reach the passmark. Consider reviewing the course before you retake this quiz.",
        buttonText: "Go Back to Courses",
      },
      successScreen: {
        title: "Well Done!",
        description: "Congratulations! You&#39;ve passed the quiz!",
        buttonText: "Go Back to Courses",
      },
      questions: [
        {
          id: 580,
          type: 0,
          title:
            "This is a single answer question with a description and explanation",
          description: "Short description of the question",
          explanation: "You should have known this...",
          answers: [
            { id: 514, isCorrect: true, text: "This is the correct answer" },
            {
              id: 19,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
        {
          id: 769,
          type: 1,
          title:
            "This is a multiple answer question with no description or explanation",
          description: "Short description of the question",
          answers: [
            { id: 372, isCorrect: true, text: "This is a correct answer" },
            { id: 729, isCorrect: true, text: "This is also a correct answer" },
            {
              id: 728,
              isCorrect: false,
              text: "This is not the correct answer",
            },
          ],
        },
      ],
      properties: {
        isCompleted: false,
        passmark: 100,
        resultsViewActive: true,
        isDisabled: false,
      },
    },
    items: [
      {
        id: 49,
        title: "Hello and welcome to cool lesson 49",
        description: "This lesson is not completed and available",
        type: "lesson" as CourseItemType.Lesson,
        childNodes: [
          {
            type: "smart-walkthru" as CourseItemType.WalkThru,
            id: 558,
            title: "Content smart-walkthru-558",
            description: "Description for smart-walkthru-558",
            properties: { isDisabled: false, isCompleted: false },
          },
          {
            type: "video" as CourseItemType.Video,
            id: 91,
            title: "Content video-91",
            description: "Description for video-91",
            properties: { isDisabled: false, isCompleted: false },
          },
        ],
        properties: { isDisabled: false, isCompleted: false },
        courseId: 155,
      },
      {
        type: "video" as CourseItemType.Video,
        id: 187,
        title: "Content video-187",
        description: "Description for video-187",
        properties: { isDisabled: true, isCompleted: false },
        courseId: 123,
      },
    ],
    properties: { isCompleted: false },
  },
];
