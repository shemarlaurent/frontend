<template>
  <li :class="{active:tab.active}" :style="{color: tab.color}">
    <a href="javascript:void(0)" :class="{disabled: !tab.checked}">
      <slot name="title">
        <span class="stepTitle"
              :class="{active:tab.active, has_error:tab.validationError}"
              :style="tab.active ? stepTitleStyle : {}">
              {{tab.title}}
        </span>
      </slot>
    </a>
  </li>
</template>
<script>
  export default {
    name: 'wizard-step',
    props: {
      tab: {
        type: Object,
        default: () => {

        }
      },
      transition: {
        type: String,
        default: ''
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      iconActiveStyle() {
        return {
          backgroundColor: this.tab.color
        }
      },
      stepCheckedStyle() {
        return {
          borderColor: this.tab.color
        }
      },
      errorStyle() {
        return {
          borderColor: this.tab.errorColor,
          backgroundColor: this.tab.errorColor
        }
      },
      stepTitleStyle() {
        let isError = this.tab.validationError
        return {
          color: isError ? this.tab.errorColor : this.tab.color
        }
      },
      isStepSquare() {
        return this.tab.shape === 'square'
      },
      isTabShape() {
        return this.tab.shape === 'tab'
      }
    }
  }
</script>
<style lang="scss">
  .stepTitle{
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    text-transform: uppercase;
  }
</style>
