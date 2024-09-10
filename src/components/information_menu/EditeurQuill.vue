<template>
  <div ref="quillEditor" class="quill-editor" style="height: 200px;"></div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
  name: 'TextEditor',
  mounted() {
    this.quillEditor = new Quill(this.$refs.quillEditor, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          ['link', 'image', 'video'],
          ['blockquote', 'code-block'],
          ['clean'], // remove formatting button
        ],
        table: true, // Enable table module
      },
    });
  },
};
</script>
