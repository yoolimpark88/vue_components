<template>
  <header class="sc-gnb">
    <div class="sc-header-top">
			<div class="sc-h-wrap">
				<ul>
					<li class="sc-h-link">
						<p><a href="/">UI DOCS바로가기</a></p>
					</li>
					<li class="sc-h-time">5:00:00 연장하기</li>
					<li class="sc-h-user">
						<a href="/">홍길동/혁신센터그룹</a>
						<div class="sc-h-user-logout"><a href="/">Logout</a></div>
					</li>
				</ul>
			</div>
    </div>
    <div class="sc-navi-wrap">
      <h1><b>UI Docs.</b></h1>
			<div class="sc-menu-container">
				<ul>
      		<li v-for="(menu, index) in menuData"
					:key="index"
					ref="menuItems"
					class="sc-menu-first"
					>
						<div 
							class="sc-sub-menu-wrapper" 
							ref="menuWrapper"
							@mouseenter="showDeps(index)" 
							@mouseleave="hideDeps(index)"
						>
							<a :href="menu.link">{{ menu.label }}</a>
							<ScMenuItem 
								v-if="menu.children && menu.children.length && isDepsVisible[index]" 
								:menu="menu" 
								:isFirstDepth="true"
								:parentWidth="menuWidths[index]" />
						</div>
					</li>
				</ul>
			</div>
		</div>
  </header>
</template>


<script setup>
import { ref, nextTick } from "vue";
import ScMenuItem from "@/components/layout/ScMenuItem.vue";
// const router = useRouter();

const menuData = ref([
	{
		label: 'menu1',
		link: '/',
		children: [
			{ label: 'menu1-1',
				link: '/',
				children: [
					{
						label: 'menu1-1-1',
						link: '/',
						children: [
							{ label: 'menu1-1-1-1' },
							{ label: 'menu1-1-1-2' }
						]
					},
					{ label: 'menu1-1-2' }
				]
			},
			{ label: 'menu1-2' },
			{	label: 'menu1-3' }
		]
	},
	{ label: 'menu2' },
	{
		label: 'menu3',
		link: '/',
		children: [
			{ label: 'menu3-1' },
			{ label: 'menu3-2' },
			{
				label: 'menu3-3',
				link: '/',
				children: [
					{
						label: 'menu3-3-1',
						link: '/',
						children: [
							{ label: 'menu3-3-1-1' },
							{ label: 'menu3-3-1-2' }
						]
					},
					{ label: 'menu3-3-2' }
				]
			}
		]
	}
])

// 1depth메뉴 hover 상태 저장
const isDepsVisible = ref([])
const menuWrapper = ref(null) // 부모 메뉴의 ref
const menuItems = ref([]);     // 메뉴별 li 요소 담을 ref 배열
const menuWidths = ref([]);    // 메뉴별 width 저장할 ref 배열

//서브메뉴로 이동시 setTimeout으로 조절
let timer = null;

const showDeps = (index) => {
	// 다른 메뉴들은 모두 닫아주기
  isDepsVisible.value = isDepsVisible.value.map(() => false)
	clearTimeout(timer)
  isDepsVisible.value[index] = true

	// 해당 메뉴의 width 측정
  nextTick(() => {
    const item = menuItems.value[index]
    if (item) {
      menuWidths.value[index] = item.offsetWidth || 0
    }
  })
}
const hideDeps = (index) => {
  timer = setTimeout(() => {
    isDepsVisible.value[index] = false
  }, 200)
}
</script>

<style scoped lang="scss">
header.sc-gnb {
  background-color: #fff;   
  box-shadow: 0px 4px 10px 0px rgba(8, 15, 52, 0.01);
  display: block;
  width:100%;
  height:118px;
  padding:0;
  margin:0;
  .sc-header-top {
    background-color: #8759F2;
    width:100%;
    height:48px;
    text-align: center;
    margin:0 auto;
    .sc-h-wrap{
      display: inline-block;
      max-width:1520px;
      min-width:1200px;
      margin:8px auto 0;
      ul{
        li {
          float:right;
          font-size:14px;
          font-weight: 300;
        }          
        .sc-h-user{
          position:relative;
          padding:4px 15px;
          &::after{
            content: '';
            display: block;
            position: absolute;
            top: 8px;
            right: 0;
            width: 1px;
            height: 14px;
            background-color: $SC-COLOR-TYPE2-GRAY-10;
          }
          .sc-h-user-logout {
            display: none;
            position: absolute;
            top: 100%;
            left: calc(50% - 47.5px);
            width:95px;
            height:42px;
            background-color: #fff;
            border-radius: 16px;
            box-shadow: 0px 4px 10px 0px rgba(8, 15, 52, 0.1);
            color:$SC-COLOR-TYPE2-GRAY-80;
            text-align: center;
            cursor: pointer;
            padding:10px;
            &:hover {
              display: block;
            }
            &:after {
              content:"";
              position: absolute;
              top: -10px;
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: #fff transparent transparent transparent;
              transform: rotate(180deg);
            }
          }            
          &:hover {
            .sc-h-user-logout {
              display: block;
            }
          }
        }
        .sc-h-time{
          background-image: url(../../assets/img/timeIcon.png);
          background-position: top 6px left;
          background-repeat: no-repeat;
          padding: 4px 15px 0 25px;
          margin-left: 15px;
        }
        .sc-h-link{
          margin-top:2px;
          p {
            background-color: rgba(165, 166, 246, 0.5);
            padding:2px 12px 3px;
            border-radius: 12px;
            a {
              cursor: pointer;
            }
          }
        }
      }    
    }      
  }
  .sc-navi-wrap {
    max-width:1520px;
    height:55px;
    margin:15px auto 0;
    h1 {
      color: $SC-COLOR-TYPE2-GRAY-90;
      background-position: left;
      background-repeat: no-repeat;
      font-size: 24px;
      padding: 0 0 0 48px;
      width:200px;
      float:left;        
    }
    .sc-menu-container {
      position: relative;
      float:left;
      margin:6px 50px;
      ul {
        list-style: none;
        padding: 0;
        li.sc-menu-first { 
          position: relative;
          color:$SC-COLOR-TYPE2-GRAY-80;
          cursor:pointer;
          float:left;
          font-size: 16px;          
          margin-right:48px;
          &:last-child {
            margin-right:0;
          }
          .sc-sub-menu-wrapper {
            position: relative;
            display: inline-block;
            a {
              text-decoration: none;
              &:hover,
              &:active {
                color:#8759F2;
                // font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}
</style>
