/**
 * Luxury Gold Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김영훈",
    nameEn: "Groom",
    father: "김홍렬",
    mother: "김연희",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "윤지희",
    nameEn: "Bride",
    father: "윤종철",
    mother: "유경임",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-16",
    time: "16:40",
    venue: "더파티움 여의도",
    hall: "그랜드 컨벤션홀 B1",
    address: "서울 영등포구 은행로 30",
    tel: "02-784-0000",
    mapLinks: {
      kakao: "https://kko.to/iPEYIwG8S4",
      naver: "https://naver.me/GaldtBAQ"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "오래 보고 싶은 사람을 만나\n평생 같은 편이 되기로 했습니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 시간을 지나고 만나서\n어느새 가장 편한 사람이 되었습니다.\n\n이제는 서로의 일상을 함께 채워가며\n한 방향을 바라보고 걸어가려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

parking: {
  title: "주차 안내",
  content: "제1주차장 | 더파티움 여의도 본관 주차장 (중소기업중앙회)\n\n제2주차장 | 중소기업중앙회 인근 주차장\n※ 제2주차장 이용 시 반드시 본관에 들러 직원 안내를 받아야 주차 등록 및 혜택이 가능합니다.",
  navigation: "내비게이션 검색: 더파티움 여의도\n서울 영등포구 은행로 30"
},

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김영훈", bank: "신한은행", number: "110-321-936090" },
      { role: "어머니", name: "김연희", bank: "신한은행", number: "110-052-022986" }
    ],
    bride: [
      { role: "신부", name: "윤지희", bank: "신한은행", number: "110-438-328745" },
      { role: "아버지", name: "윤종철", bank: "국민은행", number: "212302-04-124345" },
      { role: "어머니", name: "유경임", bank: "농협은행", number: "302-04-35988311" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김영훈 ♥ 윤지희 결혼합니다",
    description: "2027년 1월 16일, 소중한 분들을 초대합니다."
  }
};
