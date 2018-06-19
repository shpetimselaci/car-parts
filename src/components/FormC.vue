<template>
  <div class="row formC">
    <h4>You can write your information here.</h4>
    <div class="u-full-width">
      <div>
        <h3 class="fu">Find your part!</h3>
        <div class="row">
          <div class="six columns">
            <label for="Name">Your full name:</label>
            <input
            class="u-full-width"
            :class="{invalid: $v.name.$error}"
            @blur="$v.name.$touch()"
            type="text" placeholder="Dave Smith *"
            v-model="name">
            <p class="err" v-if="$v.name.$error">A valid name longer that 2 characters is needed!</p>
          </div>
          <div class="six columns">
            <label for="Email">Your email:</label>
            <input class="u-full-width"
            :class="{invalid: $v.email.$error}"
            type="email"
            placeholder="youremail@gmail.com *"
            v-model="email"
            @blur="$v.email.$touch()"
            >
            <p class="err" v-if="$v.email.$error">A valid email adress is required!</p>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="Make">Make:</label>
            <input
            class="u-full-width"
            type="text"
            placeholder="Make *"
            :class="{invalid: $v.make.$error}"
            @blur="$v.make.$touch()"
            v-model="make">
            <p class="err" v-if="$v.make.$error">Make name should be at least 3 characters long!</p>
          </div>
          <div class="six columns">
            <label for="Model">Model:</label>
            <input
            class="u-full-width"
            type="text"
            placeholder="Model *"
            :class="{invalid: $v.model.$error}"
            @blur="$v.model.$touch()"
            v-model="model">
            <p class="err" v-if="$v.model.$error">Please provide a car model!</p>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="Vin Number">Vin number:</label>
            <input
            class="u-full-width"
            type="text"
            placeholder="Vin number *"
            :class="{invalid: $v.vinNum.$error}"
            @blur="$v.vinNum.$touch()"
            v-model="vinNum"
            >
            <p class="err" v-if="$v.vinNum.$error">Vin number should be at least 11 characters long!</p>
          </div>
          <div class="six columns">
            <label for="year">Year of production:</label>
            <select
            class="u-full-width"
            v-model="year"
            :class="{invalid: $v.year.$error}"
            @blur="$v.year.$touch()"
            >
              <option value="" selected disabled hidden>Choose a year *</option>
              <option v-for="index in 78" :key="firstdate+index">{{firstdate+index}}</option>
            </select>
            <p class="err" v-if="$v.year.$error">You should choose a production date!</p>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="Parts">Part(s) Required:</label>
            <input
            class="u-full-width"
            type="tel"
            placeholder="Exhaust... *"
            :class="{invalid: $v.parts.$error}"
            @blur="$v.parts.$touch()"
            v-model="parts">
            <p class="err" v-if="$v.parts.$error">You have to tell us which parts you want to get!</p>
          </div>
          <div class="six columns">
            <label for="Number">Your phone number:</label>
            <input
            placeholder="+599 9 5xxxxxx *"
            class="u-full-width"
            type="text"
            :class="{invalid: $v.number.$error}"
            @blur="$v.number.$touch()"
            v-model="number">
            <p class="err" v-if="$v.number.$error">Please provide a valid phone number!</p>
          </div>
        </div>
       <!--  <label for="Picture(s)">Additional Pictures</label>
        <file-pond
        name="Images"
        ref="pond"
        type="local"
        class-name="my-pond u-full-width"
        imagePreviewMaxHeight="150px"
        maxFileSize="1MB"
        maxTotalFileSize="2Mb"
        labelMaxFileSize
        instantUpload="false"
        allowFileEncode="true"
        labelTotalFileSizeExceeded
        label-idle="Drop pictures here..."
        allow-multiple="true"
        server="./upload"
        accepted-file-types="image/jpeg, image/png, image/jpg"
        />
        --> <label for="exampleMessage">Additional Information</label>
        <textarea
        class="u-full-width exampleMessage"
        placeholder="Anything…"
        v-model="message"
        ></textarea>
        <div class="u-full-width s">
        <transition name="bounce" mode="out-in">
         <h5 class="success" v-if="isSent">Message is sent!</h5>
         <h5 class="failure" v-if="isNotSent">Something went wrong!<br>Try again later!</h5>
       </transition>
          <button
          class="button"
          :class="{'button-primary': !$v.$invalid}"
          :disabled="$v.$invalid"
          @click.once="send"
          >
          Submit
        </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import vueFilePond from 'vue-filepond'
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import FilepondPluginFileEncode from 'filepond-plugin-file-encode';
// import FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import { AsYouType, isValidNumber } from 'libphonenumber-js'
import { required, email, minLength, numeric } from 'vuelidate/lib/validators'
// import '../assets/filepond.min.css'
// import '../assets/filepond-plugin-image-preview.min.css'
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview,FilepondPluginFileValidateSize,FilepondPluginFileEncode)
const number = (value) => isValidNumber(value)
export default {
  name: 'FormC',
  data () {
    return {
      firstdate: 1950,
      name: '',
      email: '',
      make: '',
      model: '',
      vinNum: '',
      year: '',
      parts: '',
      number: '',
      message:'',
      isSent: false,
      isNotSent: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required,
      minL: minLength(2)
    },
    model: {
      required,
      minL: minLength(1)
    },
    make: {
      required,
      minL: minLength(3)
    },
    year: {
      required,
      numeric
    },
    vinNum: {
      required,
      minL: minLength(11)
    },
    parts: {
      required
    },
    number: {
      required,
      number
    }
  },
  methods:{
    // smth(){
    //   console.log(this.$refs.pond);
    //   console.log(this.$refs.pond.processFiles());
    //   console.log(this.$refs.pond.getFiles(),this.$refs.pond.files);
    //   this.$refs.pond.getFiles().forEach((params)=>console.log(params.filename,params.origin, params.file , params.serverId,params.status, params.FileOrigin));
    // },
    send() {
    axios.post('send', 
    {
      Name: this.name,
      Email: this.email,
      Make: this.make,
      Model: this.model,
      VinNum: this.vinNum,
      ProductionDate: this.year,
      Parts: this.parts,
      PhoneNumber: this.number,
      Message: this.message
    })
    .then(response => {
      if(response.request.statusText === "OK"){
      this.isSent = true;
    }else{
      this.isNotSent = true;
    }
  }).catch(err => {
      this.isNotSent = true;
    })
}
},
  watch: {
    number () {
      this.number = new AsYouType().input(`${this.number}`)
    }
  }
}
</script>
<style>
.err{
  margin-bottom:0;
  background-color:white;
  text-align : center;
}
.u-full-width.invalid{
  border-color:red;
  background-color:#FEDBDB;
}
select{
  padding-left:5px;
}
  .pic {
    background-color: black;
    height: 132px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    margin: 10px 0;
  }
  .fu {
    text-align: center;
    padding-top: 10px;
    font-weight: 700;
  }
  .exampleMessage{
    resize:vertical;
  }
/*  .filepond--file-action-button {
    cursor: pointer;
  }
  .filepond--drop-label label {
    font-family: Raleway, sans-serif!important;
    text-align: left!important;
    padding: 0!important;
    font-size: 1.55em;
    opacity: 0.9!important;
  }
  .filepond--label-action {
    text-decoration-color: #aaa;
  }
  .filepond--panel-root {
    border-radius: 4px;
  }
  .filepond--item-panel {
    border-radius: 4px;
  }
  .filepond--item-panel {
    background-color: white;
  }
  .filepond--drip-blob {
    background-color: white;
  }
  .filepond--file-action-button {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .filepond--file-action-button {
    color: white;
  }
  .filepond--file-action-button:after {
    border-color: #fff;
  }
  .filepond--file {
    color: white;
  }

  .filepond--l .filepond--root {
    height: 200px;
    position: relative;
    margin-bottom: 1em;
    padding-top: 1em;
    line-height: normal;
    font-weight: 450;
    text-align: left;
    text-rendering: optimizeLegibility;
    direction: ltr;
    contain: layout style size;
  }
  .filepond--image-preview-overlay {
    max-height: 7rem;
  }
  [data-filepond-item-state*='error'] .filepond--item-panel,
  [data-filepond-item-state*='invalid'] .filepond--item-panel {
    background-color: red;
  }
  [data-filepond-item-state='processing-complete'] .filepond--item-panel {
    background-color: green;
  }
  .filepond--panel-root {
    background-color: white;
    border: 1px solid #D1D1D1;
  }*/
  .s {
    display:flex;
    flex-direction: column;
    align-content: flex-end;
  }
  .success{
    order:1;
    background-color: lawngreen;
    padding: 0 20px;
    border-radius: 4px;
    margin-bottom: 9px;
    align-self: flex-end;
    text-align: right;
  }

  .failure{
    order:1;
    background-color: orangered;
    padding: 0 20px;
    border-radius: 4px;
    margin-bottom: 9px;
    align-self: flex-end;
    text-align: right;
  }
  .bounce-enter-active {
  animation: bounce-in .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
  .formC {
    margin-bottom: 20px;
  }
  .button{
    align-self: flex-end
  }
</style>
