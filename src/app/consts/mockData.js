export const mockTabTypes = {
  Help: 'help',
  Tasks: 'tasks',
};

export const mockTypeNames = {
  Video: "video",
  Article: "article",
  Launcher: "launcher",
  ShoutOut: "shoutOut",
  Shuttle: "shuttle",
  SmartWalkThru: "smart-walkthru",
  Survey: "survey",
  Task: "task",
  Course: "course",
  Lesson: "lesson",
  Walkthru: "walkthru",
  Category: "category",
  Tab: "tab",
  Experiments: "experiments",
  SearchProviderUrl: "search-provider-url",
  Tag: "tag",
  TrackedElement: "trackedElement",
  TrackedPage: "trackedPage",
  SupportItem: "support",
  SearchResult: "search-result"
};

export const mockWalkmeTypes = () => {
  window.walkme = {
    content: {
      TabTypes: mockTabTypes,
      TypeNames: mockTypeNames,
    }
  }
}

export const mockNotifications = [
  {
    type: "notification",
    id: "458442ad-5f24-44a7-a051-087516a68f2f",
    title: "Untitled Notification 11",
    description: "",
    properties: {
      isPlayed: true,
      isSilent: false,
      date: "2020-01-30T23:25:13.427Z"
    }
  },
  {
    type: "notification",
    id: "5s1sy1oa-90cs-xnzy-sr10-96kj13nl26jx",
    title: "Untitled Notification 12",
    description: "",
    properties: {
      isPlayed: false,
      isSilent: false,
      date: "2020-01-30T23:25:13.427Z"
    }
  }
];

export const mockLanguages = [
  {
    displayName: "default",
    shortName: ""
  },
  {
    displayName: "spanish",
    shortName: "es-es"
  }
];

export const mockUiTree = [
  {
    type: "tab",
    id: 358,
    title: "Assistant Home",
    description: "Description for tab-358",
    properties: {
      tabType: "help"
    },
    childNodes: [
      {
        type: "smart-walkthru",
        id: 380,
        title: "Content smart-walkthru-380",
        description: "Description for smart-walkthru-380",
        properties: {}
      },
      {
        type: "survey",
        id: 135,
        title: "Content survey-135",
        description: "Description for survey-135",
        keywords: ['jest', 'testing'],
        properties: {}
      },
      {
        type: "shuttle",
        id: 137,
        title: "Content shuttle-137",
        description: "Description for shuttle-137",
        keywords: [],
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "video",
        id: 438,
        title: "Content video-438",
        description: "Description for video-438",
        properties: {}
      },
      {
        type: "article",
        id: 908,
        title: "Content article-908",
        description: "Description for article-908",
        properties: {}
      },
      {
        type: "category",
        id: 411,
        title: "Category",
        description: "Description for category-411",
        childNodes: [
          {
            type: "smart-walkthru",
            id: 29,
            title: "Content smart-walkthru-29",
            description: "Description for smart-walkthru-29",
            properties: {}
          },
          {
            type: "survey",
            id: 669,
            title: "Content survey-669",
            description: "Description for survey-669",
            properties: {}
          },
          {
            type: "shuttle",
            id: 811,
            title: "Content shuttle-811",
            description: "Description for shuttle-811",
            keywords: [],
            properties: {
              url: "https://287.example.com/index?t=780"
            }
          },
          {
            type: "video",
            id: 684,
            title: "Content video-684",
            description: "Description for video-684",
            properties: {}
          },
          {
            type: "article",
            id: 124,
            title: "Content article-124",
            description: "Description for article-124",
            properties: {}
          }
        ],
        properties: {}
      }
    ]
  },
  {
    type: "tab",
    id: 767,
    title: "Ongoing Tasks",
    description: "Description for tab-767",
    properties: {
      tabType: "tasks"
    },
    childNodes: [
      {
        type: "task",
        id: 811,
        title: "Not completed-811",
        description: "Description for task-811",
        keywords: [],
        properties: {
          isCompleted: false,
          isCrossedOff: false,
          isDisabled: false
        }
      },
      {
        type: "task",
        id: 129,
        title: "Not completed",
        description: "Description for task-129",
        properties: {
          isCompleted: false,
          isCrossedOff: false,
          isDisabled: false
        }
      },
      {
        type: "task",
        id: 674,
        title: "Completed - not crossed off, not disabled",
        description: "Description for task-674",
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: false
        }
      },
      {
        type: "task",
        id: 141,
        title: "Completed - not crossed off, not disabled",
        description: "Description for task-141",
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: false
        }
      },
      {
        type: "task",
        id: 1,
        title: "Completed - crossed off, not disabled",
        description: "Description for task-1",
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: false
        }
      },
      {
        type: "task",
        id: 386,
        title: "Completed - crossed off, not disabled",
        description: "Description for task-386",
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: false
        }
      },
      {
        type: "task",
        id: 428,
        title: "Completed - crossed off, disabled",
        description: "Description for task-428",
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: true
        }
      },
      {
        type: "task",
        id: 869,
        title: "Completed - crossed off, disabled",
        description: "Description for task-869",
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: true
        }
      },
      {
        type: "task",
        id: 888,
        title: "Completed - not crossed off, disabled",
        description: "Description for task-888",
        keywords: [],
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: true
        }
      },
      {
        type: "task",
        id: 390,
        title: "Completed - not crossed off, disabled",
        description: "Description for task-390",
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: true
        }
      },
      {
        type: "category",
        id: 207,
        title: "Day 1",
        description: "Description for category-207",
        childNodes: [
          {
            type: "task",
            id: 552,
            title: "Not completed",
            description: "Description for task-552",
            properties: {
              isCompleted: false,
              isCrossedOff: false,
              isDisabled: false
            }
          },
          {
            type: "task",
            id: 603,
            title: "Not completed",
            description: "Description for task-603",
            properties: {
              isCompleted: false,
              isCrossedOff: false,
              isDisabled: false
            }
          },
          {
            type: "task",
            id: 527,
            title: "Completed - not crossed off, not disabled",
            description: "Description for task-527",
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: false
            }
          },
          {
            type: "task",
            id: 418,
            title: "Completed - not crossed off, not disabled",
            description: "Description for task-418",
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: false
            }
          },
          {
            type: "task",
            id: 154,
            title: "Completed - crossed off, not disabled",
            description: "Description for task-154",
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: false
            }
          },
          {
            type: "task",
            id: 784,
            title: "Completed - crossed off, not disabled",
            description: "Description for task-784",
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: false
            }
          },
          {
            type: "task",
            id: 139,
            title: "Completed - crossed off, disabled",
            description: "Description for task-139",
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: true
            }
          },
          {
            type: "task",
            id: 468,
            title: "Completed - crossed off, disabled",
            description: "Description for task-468",
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: true
            }
          },
          {
            type: "task",
            id: 573,
            title: "Completed - not crossed off, disabled",
            description: "Description for task-573",
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: true
            }
          },
          {
            type: "task",
            id: 612,
            title: "Completed - not crossed off, disabled",
            description: "Description for task-612",
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: true
            }
          }
        ],
        properties: {}
      }
    ]
  },
  {
    type: "tab",
    id: 746,
    title: "Bookmarks",
    description: "Description for tab-746",
    childNodes: [
      {
        type: "shuttle",
        id: 738,
        title: "Content shuttle-738",
        description: "Description for shuttle-738",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 82,
        title: "Content shuttle-82",
        description: "Description for shuttle-82",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 466,
        title: "Content shuttle-466",
        description: "Description for shuttle-466",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 518,
        title: "Content shuttle-518",
        description: "Description for shuttle-518",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 462,
        title: "Content shuttle-462",
        description: "Description for shuttle-462",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 184,
        title: "Content shuttle-184",
        description: "Description for shuttle-184",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 200,
        title: "Content shuttle-200",
        description: "Description for shuttle-200",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 878,
        title: "Content shuttle-878",
        description: "Description for shuttle-878",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 479,
        title: "Content shuttle-479",
        description: "Description for shuttle-479",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      },
      {
        type: "shuttle",
        id: 248,
        title: "Content shuttle-248",
        description: "Description for shuttle-248",
        properties: {
          url: "https://287.example.com/index?t=780"
        }
      }
    ],
    properties: {
      tabType: "help"
    }
  }
];

export const mockUiTreeFlat = [
  {
    "type": "smart-walkthru",
    "id": 380,
    "title": "Content smart-walkthru-380",
    "description": "Description for smart-walkthru-380",
    "properties": {}
  },
  {
    "type": "survey",
    "id": 135,
    "title": "Content survey-135",
    "description": "Description for survey-135",
    "keywords": ['jest', 'testing'],
    "properties": {}
  },
  {
    "type": "shuttle",
    "id": 137,
    "title": "Content shuttle-137",
    "description": "Description for shuttle-137",
    "keywords": [],
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "video",
    "id": 438,
    "title": "Content video-438",
    "description": "Description for video-438",
    "properties": {}
  },
  {
    "type": "article",
    "id": 908,
    "title": "Content article-908",
    "description": "Description for article-908",
    "properties": {}
  },
  {
    "type": "smart-walkthru",
    "id": 29,
    "title": "Content smart-walkthru-29",
    "description": "Description for smart-walkthru-29",
    "properties": {}
  },
  {
    "type": "survey",
    "id": 669,
    "title": "Content survey-669",
    "description": "Description for survey-669",
    "properties": {}
  },
  {
    "type": "shuttle",
    "id": 811,
    "title": "Content shuttle-811",
    "description": "Description for shuttle-811",
    "keywords": [],
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "video",
    "id": 684,
    "title": "Content video-684",
    "description": "Description for video-684",
    "properties": {}
  },
  {
    "type": "article",
    "id": 124,
    "title": "Content article-124",
    "description": "Description for article-124",
    "properties": {}
  },
  {
    "type": "task",
    "id": 811,
    "title": "Not completed-811",
    "description": "Description for task-811",
    "keywords": [],
    "properties": {
      "isCompleted": false,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 129,
    "title": "Not completed",
    "description": "Description for task-129",
    "properties": {
      "isCompleted": false,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 674,
    "title": "Completed - not crossed off, not disabled",
    "description": "Description for task-674",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 141,
    "title": "Completed - not crossed off, not disabled",
    "description": "Description for task-141",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 1,
    "title": "Completed - crossed off, not disabled",
    "description": "Description for task-1",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 386,
    "title": "Completed - crossed off, not disabled",
    "description": "Description for task-386",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 428,
    "title": "Completed - crossed off, disabled",
    "description": "Description for task-428",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 869,
    "title": "Completed - crossed off, disabled",
    "description": "Description for task-869",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 888,
    "title": "Completed - not crossed off, disabled",
    "description": "Description for task-888",
    "keywords": [],
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 390,
    "title": "Completed - not crossed off, disabled",
    "description": "Description for task-390",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 552,
    "title": "Not completed",
    "description": "Description for task-552",
    "properties": {
      "isCompleted": false,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 603,
    "title": "Not completed",
    "description": "Description for task-603",
    "properties": {
      "isCompleted": false,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 527,
    "title": "Completed - not crossed off, not disabled",
    "description": "Description for task-527",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 418,
    "title": "Completed - not crossed off, not disabled",
    "description": "Description for task-418",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 154,
    "title": "Completed - crossed off, not disabled",
    "description": "Description for task-154",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 784,
    "title": "Completed - crossed off, not disabled",
    "description": "Description for task-784",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": false
    }
  },
  {
    "type": "task",
    "id": 139,
    "title": "Completed - crossed off, disabled",
    "description": "Description for task-139",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 468,
    "title": "Completed - crossed off, disabled",
    "description": "Description for task-468",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": true,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 573,
    "title": "Completed - not crossed off, disabled",
    "description": "Description for task-573",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": true
    }
  },
  {
    "type": "task",
    "id": 612,
    "title": "Completed - not crossed off, disabled",
    "description": "Description for task-612",
    "properties": {
      "isCompleted": true,
      "isCrossedOff": false,
      "isDisabled": true
    }
  },
  {
    "type": "shuttle",
    "id": 738,
    "title": "Content shuttle-738",
    "description": "Description for shuttle-738",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 82,
    "title": "Content shuttle-82",
    "description": "Description for shuttle-82",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 466,
    "title": "Content shuttle-466",
    "description": "Description for shuttle-466",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 518,
    "title": "Content shuttle-518",
    "description": "Description for shuttle-518",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 462,
    "title": "Content shuttle-462",
    "description": "Description for shuttle-462",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 184,
    "title": "Content shuttle-184",
    "description": "Description for shuttle-184",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 200,
    "title": "Content shuttle-200",
    "description": "Description for shuttle-200",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 878,
    "title": "Content shuttle-878",
    "description": "Description for shuttle-878",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 479,
    "title": "Content shuttle-479",
    "description": "Description for shuttle-479",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  },
  {
    "type": "shuttle",
    "id": 248,
    "title": "Content shuttle-248",
    "description": "Description for shuttle-248",
    "properties": {
      "url": "https://287.example.com/index?t=780"
    }
  }
];