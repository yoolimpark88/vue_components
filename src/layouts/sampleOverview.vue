<template>
  <div>
    <div class="sc-overview-box">
      <div class="tit-wrap">
        <p class="tit-chip">Overview</p>
        <h3>UI Docs.<br />Introduction</h3>
        <p class="tit-desc">
          UI Docs.는 일관된 명명 규칙과 TailwindCSS 기반의 스타일링,  그리고 고유한 디자인 시스템을 활용하여 구조화된 UI/UX를 제공합니다. 이를 통해 코드의 가독성과 유지보수성을 향상시키고, 사용자 경험을 최적화하는 데 중요한 역할을 합니다.
        </p>
        <div :style="backgroundStyle"></div>
      </div>
      <div class="hlist-wrap">
        <div class="hlist">
          <span :style="pointStyle"></span>
          <div class="hlist-desc">
            Vue 파일은 **파스칼 케이스(Pascal Case)**로 명명합니다. 파스칼 케이스는 단어의 첫 글자를 대문자로 시작하고 단어마다 첫 글자를 대문자로 구분합니다. 파일 내 컴포넌트 이름도 파일명과 동일하게 지정해야 합니다.
          </div>
          <h5>Vue 파일 명명 규칙</h5>
          <div class="hlist-ex">
            <p>PortalMain.vue → PortalMain 컴포넌트</p>
            <p>UserProfile.vue → UserProfile 컴포넌트</p>
          </div>
        </div>
        <div class="hlist">
          <span :style="pointStyle"></span>
          <div class="hlist-desc">
            Vue 파일 내에서 정의되는 변수는 **카멜 케이스(Camel Case)**로 명명해야 합니다. 카멜 케이스는 첫 단어는 소문자로 시작하고, 이후 단어의 첫 글자를 대문자로 표기하는 방식입니다.
          </div>
          <h5>Vue 파일 내 변수 표기법</h5>
          <div class="hlist-ex">
            <p>const menuId;</p>
            <p>let userData;</p>
          </div>
        </div>
        <div class="hlist">
          <span :style="pointStyle"></span>
          <div class="hlist-desc">
            Vue의 template 영역 내에서 사용하는 HTML 태그 및 컴포넌트는 **케밥 케이스(Kebab Case)**로 표기해야 합니다. 또한, 컴포넌트 선언 시 전달되는 props 명칭도 동일하게 케밥 케이스로 적용합니다.
          </div>
          <h5>Vue 파일 내 Template 영역 표기법</h5>
          <div class="hlist-ex">
            <p v-pre>
              &lt;approval-modal value="" /&gt;
            </p>
            <p v-pre>
              &lt;user-profile :user-id="123" /&gt;
            </p>
          </div>
        </div>
        <div class="hlist">
          <span :style="pointStyle"></span>
          <div class="hlist-desc">
            TailwindCSS를 사용하여 스타일을 적용합니다. 이 프레임워크는 유틸리티 클래스를 활용하여 빠르고 효율적인 스타일링을 가능하게 합니다. 클래스 이름은 TailwindCSS의 기본 규칙을 따르며, 의미 있는 클래스명으로 직관적인 스타일링을 진행합니다.
          </div>
          <h5>css 스타일링</h5>
          <div class="hlist-ex">
            <p>class="bg-blue-500 text-white p-4 rounded-lg"</p>
          </div>
        </div>
        <div class="hlist">
          <span :style="pointStyle"></span>
          <div class="hlist-desc">
            UI Docs는 Vue 3에 최적화된 다양한 UI 컴포넌트와 스타일을 제공합니다. 
            컴포넌트와 스타일링은 심플하고 직관적인 디자인 시스템을 따르며, 일관성 있는 UI와 높은 확장성을 갖추고 있습니다.
          </div>
          <h5>UI 라이브러리 및 디자인 시스템</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from '@/assets/img/overview_bg.png';
import pointImage from '@/assets/img/overview_point.png';

const backgroundStyle = {
  position:'relative',
  width: '645px',
  height: '400px',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'right center',
  left: '-100px',
};
const pointStyle = {
  position:'absolute',
  width:'50px',
  height:'50px',
  backgroundImage: `url(${pointImage})`,
  display:'inline-block',
  top:'20px',
  left: '-30px',
  backgroundSize: 'contain',
}
</script>

<style scoped lang="scss">
.sc-overview-box {
  display:flex;
  position: relative;
  &::before {
    content: "";
    width:1000px;
    height:300px;
    position:absolute;
    left:-50px;
    top:164px;
    background-color: rgba(165, 166, 246, 0.25);
  }
  .tit-wrap {
    width:40%;
    .tit-chip {
      display: inline-block;
      border-radius: 8px;
      border: 1px solid $SC-COLOR-TYPE2-GRAY-40;
      color: $SC-PRIMARY-COLOR-TYPE2;
      font-size:$SC-FONT-SIZE-TYPE2-BODY-2;
      padding:5px 10px;
    }
    h3 {
      font-size: 52px;
      font-weight: bold;
      color: $SC-COLOR-TYPE2-GRAY-100;
      line-height: 3rem;
      letter-spacing: 0.05rem;
      margin: 15px 0 30px 0;
    }
    .tit-desc {
      font-size: $SC-FONT-SIZE-TYPE2-BODY-3;
    }
  }
  .hlist-wrap {
    width:calc(60% - 100px);
    margin-left:100px;
    .hlist {
      position:relative;
      width:100%;
      min-height: 165px;
      background-color:#fff;
      box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
      padding:30px;
      margin-bottom:30px;
      .hlist-desc {
        color: #636571;
        font-size:16px;
      }
      h5 {
        color: #000A2D;
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0 10px 0;
      }
      .hlist-ex {
        color:#636571;
        font-size: 14px;
      }
    }
  }
} 
</style>