# ESPEC 코드 컨벤션 (Code Convention)

### 설정파일 (.eslintrc.js, .prettierrc.json 2개 파일은 root에 위치)

```jsx
// .eslintrc.js 파일
module.exports = {
	root: true,
	env: {
		node: true
	},
	extentds: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-fommating'
	]
};
```

```jsx
// .prettierrc.json 파일
{
	"$schema": "https://json.schemastore.org/prettierrc",
	"semi": true,
	"tabWidth": 2,
	"singleQuote": true,
	"printWidth": 100,
	"trailingComma": "all"
}
```

- VSCODE의 경우 설치할 extension
    - **ESLint (Microsoft)**
    - **Prettier - Code fommatter**
    - Auto Rename Tag
    - Auto Close Tag
    - Vetur (.vue 파일의 코드 하이라이팅)
    - Vue Peek (템플릿이나 모듈 추적)
    - DotENV (.env 파일 코드 하이라이팅)
- Default Fommater 설정
    - 프로젝트 내 본인의 vue파일을 열고 Fommatting(쉬프트 + 알트 + F)실행 - prettier 로 설정
    - 프로젝트 내 본인의 js파일을 열고 Fommatting(쉬프트 + 알트 + F)실행 - prettier 로 설정
- 저장시 자동 포맷 설정
    - File > Preference > settings
    - 설정창 열리면 Text Editor > Formatting > Format On Save 에 체크
- Vue File 명명 규칙
    - 파스칼 케이스(pascal case)로 생성.
    - 파일 내 컴포넌트 이름 지정시 확장자를 제외한 파일명과 동일하게 지정
    - ex) PortalMain.vue
- Vue File 내 변수 표기법
    - 카멜 케이스(Camel Case)로 지정
    - ex) const menuId;
- Vue File 내 Template 영역 표기법
    - 케밥 케이스(kebab Case)로 지정
    - 컴포넌트 선언 영역에서 전달되는 props 명칭도 동일하게 적용
    - ex) <approval-modal :rpt-doc-id=”ispec0001” :show-mode=””test” />
- 업무별 service.js 파일 활용법
    - Vue 파일 script 영역에서 axios를 직접 호출하는 방식이 아닌 service 파일 내 선언한 메소드를 호출.
    - service 파일 내 메소드명은 url과 맵핑되는 controller파일 메소드명과 동일하게 작성.
    - backend / frontend 간의 통신과 협업이 더욱 원활해지며 각각의 메소드를 더 쉽게 식별하고, 코드의 일관성과 가독성을 유지 할 수 있습니다.
    
    ```jsx
    // service.js 파일
    import axios from 'axios';
    export default {
    	getMenuList: (params) => axios.get('/common/menu', params),
    };
    
    // vue file
    import commonService from '@/services/portal';
    // case 1
    const params = {};
    const { data } = await commonService.getMenuList(params);
    // case 2
    commonService.getMenuList(params).then(({ data }) => {
    	//
    });
    ```
    
    ```jsx
    // 업무별 controller.java 파일
    @GetMapping("/menu")
    public Response<?> getMenuList(@ModelAttribute @Valid MenuParams params) throws Exception{
    	//
    }
    ```
    

- Git Commit Message 규칙
    
    ```
    - [업무] {type}: comment
    - Commit 메세지는 한줄 요약 작성
    - 변경사항이 "무엇"인지 명확히 작성 / 끝에 마침표 금지
    
    - Commit Type:
    	#feat : 새로운 기능을 추가하는 작업
    	#fix : 버그를 수정한 작업
    	#docs : 오직 문서만을 변경한 작업
    	#perf : 성능 개선을 위해 코드를 변경한 작업
    	#refactor : 버그 수정이나 새로운 기능을 추가하기 위함은 아니지만 코드를 변경한 작업(리팩토링)
    	#style : 코드 의미에 영향을 주지 않는 변경사항
    	#design : UI 디자인 변경
    	
    - ex) [Common] feat: vue3 기본 초기세팅 구성
    ```
    
- CSS 네이밍 규칙 : BEM (Block + Element + Modify)
