module.exports = {
  title: `chaeniiz.com`,
  description: `채윤의 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.chaeniiz.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `chaeniiz/chaeniiz-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `송채윤`,
    bio: {
      role: `개발자`,
      description: ['사유하는', '사람 중심의', '예술을 사랑하는', '마음 쓰고 글 쓰는', '삶의 중심을 지켜 나가는'],
      thumbnail: 'chaeniiz.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/chaeniiz`, 
      linkedIn: `https://www.linkedin.com/in/%EC%B1%84%EC%9C%A4-%EC%86%A1-335a84194/`, 
      email: `chaeniiz@kakao.com`, 
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2015.02 ~ 2020.02',
        activity: '서울여자대학교 소프트웨어융합 학사',
      },
      {
        date: '2016.07 ~ 2020.02',
        activity: '앱 개발 동아리 Mash-Up',
      },
      {
        date: '2018.07 ~ 2023.02',
        activity: '뱅크샐러드 Android App 개발',
      },
      {
        date: '2021.02 ~',
        activity: '개인 블로그 운영',
      },
    ],

    techblogs: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        link: '',
      },
      // ========================================================
      // ========================================================
      {
        title: '사회 초년생이 바라본 레이니스트',
        description: '안드로이드 팀에서 인턴으로 일하고 계신 채윤님이 느낀 레이니스트는 어떤 곳일까요?',
        thumbnailUrl: 'cover_intern.jpeg',
        link: 'https://medium.com/banksalad/reviewing-rainist-by-newcomer-e2ecbf9ad812',
      },
      {
        title: '테스트 코드, 안드로이드에서는 어떻게 작성해야 할까?',
        description: '뱅크샐러드 안드로이드 팀의 테스트 코드 작성 방법 엿보기',
        thumbnailUrl: 'cover_test.jpg',
        link: 'https://blog.banksalad.com/tech/test-in-banksalad-android/',
      },
      {
        title: '뱅크샐러드의 특별한 스펙, "테크 스펙"',
        description: '개발 전 문서로 코드를 설명하는 테크 스펙 기반 협업 문화에 대해 설명합니다.',
        thumbnailUrl: 'cover_tech_spec.jpg',
        link: 'https://blog.banksalad.com/tech/we-work-by-tech-spec/',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '뱅크샐러드 홈 화면 개발',
        description:
          '뱅크샐러드의 홈 화면을 구현하고 성공적으로 런칭했습니다. 홈 탭의 특성 상 화면 전환이 복잡하고 많아 이를 효율적으로 관리할 수 있는 Screen Navigator를 제안하고 구현하여 모든 화면 이동 케이스를 대응했습니다.',
        techStack: ['kotlin', 'coroutine', 'hilt', 'mvvm'],
        thumbnailUrl: 'home.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '뱅크샐러드 주주모임 기능 개발',
        description:
          '해커톤으로 구현되었던 주주모임 기능을 고도화했습니다. 약 10개의 크고 작은 실험들을 진행했으며, 테스트 코드를 작성하여 해당 모듈 내 Unit Test Coverage를 10%에서 36%로 끌어올려 안정적인 제품을 만들었습니다.',
        techStack: ['kotlin', 'RxJava2', 'coroutine', 'hilt', 'mvvm'],
        thumbnailUrl: 'invest.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '뱅크샐러드 장애 대응 시스템 추가',
        description:
          '장애 발생을 감지하는 시점부터 장애가 해결되는 상태에 도달하는 프로세스를 확보하기 위하여 Opsgenie라는 툴을 선정하여 조사하고, 연결하였습니다. Jira, Slack, App Push, Email, SMS, Phone Call을 비롯한 각종 알림들을 연동하는 것부터 On-Call Rotation 설정, Google Calendar 연동 등 장애 발생을 즉각적으로 인지할 수 있는 방법을 전부 연결하였고, 각 팀원들이 알림을 적용할 수 있도록 Android Chapter Weekly 시간에 공유, 모든 팀원이 적용하였습니다.',
        techStack: ['opsgenie'],
        thumbnailUrl: 'opsgenie.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '뱅크샐러드 MVVM 마이그레이션',
        description:
          'MVP 기반의 클래스를 리스트업 하고, 전부 MVVM으로 마이그레이션하는 프로젝트를 리드하였습니다. 앱 전역의 아키텍처를 변경하는 업무였기에 건드려야 할 코드 영역이 매우 넓었으며, 총 여섯 명의 팀원이 함께하는 작업이었으므로 각 팀원들의 배포 가능 일정을 고려해야 했고, 배포 시점 중간에 한 달이라는 긴 휴가가 예정되어 있었기에 깔끔한 업무 분담과 지시가 필요했습니다. 위 내용을 바탕으로 개발 시작 전 테크 스펙을 가이드 문서로 활용 가능하게끔 상세히 작성한 뒤 각 영역에 대해 피쳐 플래그를 따로 정의하였습니다. 업무들을 잘게 쪼개어 작업에 혼선이 없게끔 하였고, 휴가 중에도 배포에 문제가 없게끔 각 영역을 담당해 주어야 할 분들 또한 정해 두었습니다. 이를 통해 기존에 목표했던 113개의 Presenter 중 7개 모듈의 Presenter를 혼선 없이 마이그레이션 완료, 코드 클린업까지 모두 진행하였습니다.',
        techStack: ['kotlin', 'mvvm'],
        thumbnailUrl: 'MVVM.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '뱅크샐러드 사업자 탭 개발',
        description:
          '사업 탭의 BPL 컴포넌트 제작 및 안드로이드 개발을 일부 지원하는 것만으로 시작하였으나, 오너십을 발휘하여 사업 탭 전반에 걸친 개발을 완수했고 분기 내에 iOS와 같은 버전에 배포하였습니다. 배포 후 버그 및 크래시를 0회로 유지하여 안정성 높은 제품을 출시했으며, 분기 내 배포는 매우 도전적인 기한이었음에도 불구하고 속도를 중시하면서 퀄리티의 디테일까지 놓치지 않았습니다. 배포 후 해당 탭 관련 실험을 주도적으로 설계하고 Amplitude에 대시보드를 제작해 모니터링하였으며, 이벤트 오너십을 가지고 주도적으로 사업 탭의 모든 이벤트를 설계, QA를 진행하여 iOS, Android 모두 100%의 정합성을 유지하였습니다.',
        techStack: ['kotlin', 'RxJava2', 'mvvm', 'Amplitude'],
        thumbnailUrl: 'business.jpeg',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '개발 환경 본인 인증 로그인 시간 단축 기능 개발',
        description:
          '개발 중에 우리는 수많은 이유로 앱 삭제 후 재설치를 거치게 됩니다. 그때마다 본인 인증 로그인 후 특정 패턴을 만족하는 비밀번호를 설정하여 로그인하는 것은 매우 비효율적이므로, 개발 환경에서는 이를 건너뛰도록 기획, 개발, 배포하였습니다. 개발 시작 전 1-pager작성과 함께 개발 환경에 대한 정의부터 확립함으로 팀원 간 정보 격차를 해소했고, 이에서 팀워크 역량을 잘 보여 주었습니다. 기존 1분이 걸리던 본인 인증 로그인 경험을 20초로 줄이는 것이 목표였으나, 실제로는 5-6초 만에 로그인을 끝내는 것으로 목표를 초과 달성하였습니다. 배포와 동시에 #all_shoutout 채널에서 거론되며 안드로이드 테스터들에게 유의미한 기능임을 검증했습니다.',
        techStack: ['kotlin', 'RxJava2'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '뱅크샐러드 부동산, 자동차 추가 및 편집 기능 개발',
        description:
          '뱅크샐러드에 부동산과 자동차를 추가 및 편집할 수 있는 기능을 추가했습니다. 뱅크샐러드 입사 후 첫 피쳐로 애정이 남달라 시간이 지난 뒤에도 꾸준히 리팩토링하고 이슈를 대응하며 오너십을 가져갔습니다.',
        techStack: ['kotlin', 'RxJava2', 'mvvm', 'mvp'],
        thumbnailUrl: 'realestate.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
