<template>
  <form ref="range-form" :style="`--val: ${current}`">
    <div class="range-container">
      <span class="font-semibold my-2 block title">{{ title }}</span>
      <div class="range-slider">
        <input
          type="range"
          name="range-slider"
          ref="range-slider"
          :step="step"
          :max="max"
          :min="min"
          v-model="current"
          @change="update"
          @input="update"
        />
      </div>
      <span class="font-semibold my-2 block number">{{ current }}</span>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'DelphiVerticalSlider',
    mounted() {
      let input = this.$refs[ 'range-slider' ]
      document.documentElement.classList.add('js')
      input.addEventListener('input', this.update, false)
      input.addEventListener('change', this.update, false)
    },
    methods: {
      update(e) {
        let newval = +e.target.value
        newval = (((newval - this.min)/(this.max - this.min)) * 100).toFixed(2)
        let form = this.$refs[ 'range-form' ]
        form.style.setProperty('--val', newval)
      },
      onChange() {
        this.$emit('on-change', this.current)
      }
    },
    props: {
      type: {
        default: 1,
        type: [Number, String],
        required: false
      },
      title: {
        default: '',
        type: String,
        required: false
      },
      max: {
        default: 0,
        type: Number,
        required: false
      },
      min: {
        type: Number,
        required: false,
        default: 0
      },
      step: {
        default: 1,
        required: false,
        type: Number
      }
    },
    data() {
      return {
        current: this.min
      }
    },
    watch: {
      current: 'onChange'
    }
  }
</script>

<style scoped lang="scss">
  :root {
    --val: 50;
  }

  $base-rd: 0.938em;
  $base-bg: linear-gradient(to right top, #f8f8f8, #f8f8f8);

  $track-w: 18.875em;
  $track-h: 1.188em;
  $track-bg: linear-gradient(#f8f8f8 50%,
    #f8f8f8 0, transparent) content-box, $base-bg;
  ;

  $thumb-d: 1.5em;
  $thumb-w: 1.25em;
  $thumb-h: 1.25em;

  $fill-bg: linear-gradient(90deg, #000, #000);
  $fill-h: ($track-h);

  @mixin track($fill: false) {
    /* common styles */
    -webkit-appearance: none;
    background: $track-bg;
    -webkit-border-radius: 0.5 * $track-h;
    -moz-border-radius: 0.5 * $track-h;
    border-radius: 0.5 * $track-h;
    width: 100%;
    height: $track-h;
    box-sizing: border-box;
    /* if the fill/ progress is included in track
     * because there's no standalone pseudo */
    @if $fill == true {
      .js & {
        background: $fill-bg
        0 50%/ calc(var(--val)*1%) $fill-h
        no-repeat content-box, $track-bg;

        /*background: [background-image] [background-position] / [background-size] [background-repeat] [background-attachment] [background-origin] [background-clip] [background-color];*/
        /*background: $fill-bg
            0
            50% /
            calc(var(--val) * 1%)
            $fill-h
            no-repeat
            content-box,
          $track-bg;*/
      }
    }
  }

  @mixin thumb() {
    /* common styles */
    -webkit-appearance: none;
    -webkit-background-image: none;
    appearance: none;
    width: $thumb-w;
    height: $thumb-h;
    background: #fff;
    cursor: grab;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    border: 5px solid #000;
    box-sizing: content-box;
  }

  @mixin fill() {
    height: $fill-h;
    background: $fill-bg;
  }

  @mixin progress() {
    appearance: none;
    -webkit-appearance: none;
    background: #000;
    height: $fill-h;
    border-radius: 30px;
  }

  .range-container {
    width: 100%;
    margin: 6px;
    @apply flex relative flex-wrap items-center justify-around mx-auto;
    .title,
    .number {
      max-width: 70px;
      @apply flex-1 flex-shrink-0 text-center;
    }

    .range-slider {
      @apply flex-auto mx-auto flex items-center;
      width: $track-w;

      input[type='range'] {
        margin: 0;
        padding: 0;
        font: 1em/1 arial, sans-serif;
        width: 100%;
        height: $track-h;
        background: none;

        border-radius: $base-rd;
        outline: none;
        display: block;
        appearance: none;
        transition: opacity 0.2s ease-in-out;
        box-sizing: border-box;
        margin-right: 1em;

        /* -webkit */
        &::-webkit-slider-runnable-track,
        &::-webkit-slider-thumb,
        & {
          -webkit-appearance: none;
        }

        /* track styles */
        &::-webkit-slider-runnable-track {
          @include track(true);
        }

        &::-webkit-slider-thumb {
          margin-top: ($fill-h - $thumb-d);
          @include thumb();
        }

        /* End -webkit */

        /* mozilla */
        &::-moz-range-track {
          @include track();
        }

        &::-moz-range-thumb {
          cursor: ew-resize;
          @include thumb;
        }

        /* fill/ progress styles */
        &::-moz-range-progress {
          @include progress;
        }

        /* End mozilla */

        /* IE */
        &::-ms-track {
          @include track();
          border: none; /* remove black border */
          color: transparent; /* remove ticks */
        }

        &::-ms-thumb {
          margin-top: 0;
          @include thumb;
        }

        &::-ms-fill-lower {
          @include fill();
        }

        &::-ms-tooltip {
          display: none;
        }

        html:not(.js) & + output {
          display: none;
        }

        /* End IE */

        &:focus {
          outline: none;
          // filter: drop-shadow(0 0 0.5em rgba(rgb(178, 184, 245), 0.7));
        }
      }
    }

    @media (min-width: 1024px) {
      height: 400px;
      .title {
        @apply mx-auto absolute bottom-0;
      }
      .number {
        @apply mx-auto absolute top-0;
      }
      .range-slider {
        transform: rotate(-90deg);
        @apply absolute;
      }
    }
  }
</style>
