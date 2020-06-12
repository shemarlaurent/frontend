<template>
  <div class="p-2 lg:w-5/6 md:w-5/6 mx-auto">
    <transition name="fade">
      <div class="block ">
        <div class="headline-lg text-center font-bold">
          Ideas/problems
        </div>
        <form @submit="handleSubmit">
          <div class="form-control-group">
            <label for="report-sheet" class="invisible">Report Ideas/problems</label>
            <textarea name="report-sheet" id="report-sheet" cols="30" rows="10" class="form-control"
                      placeholder="Tell us an idea you want created/Problems you have in streetwear"></textarea>
          </div>
          <div class="form-control-group flex justify-end">
            <button type="submit" class="btn btn-black py-4 px-8">Enter</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'send-idea',
    // layout: 'deliverable',
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        alert('Form submitted')
      }
    }
  }
</script>

<style scoped>

</style>
