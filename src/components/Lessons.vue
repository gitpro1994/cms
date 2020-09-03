<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title>
          Dərslər
          <v-spacer/>
          <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small color="success" v-bind="attrs" v-on="on">
          <span><i class="fa fa-plus-circle"></i>Yeni</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Dərs qeydiyyatı</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="9" sm="9" md="9">
                <v-text-field required  v-model="random"></v-text-field>
              </v-col>
              <v-col cols="3" sm="3" md="3">
                <v-btn large color="primary" @click="code_generator">
                  Kod
                </v-btn>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Dərsin adını daxil edin *" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small class="text-danger">* işarəli xanalar boş qala bilməz</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Bağla</v-btn>
          <v-btn color="green darken-1" text @click="save">Yadda saxla</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          <v-btn class="ma-2" @click="$router.go(-1)" small color="error">
          <span><i class="fa fa-arrow-left"></i></span> Geri
          </v-btn>  
        </v-card-title>  
        <v-card-text>
          <v-alert class="default">
            <h5>Burda dərslərin cədvəli olacaq</h5>
          </v-alert>
        </v-card-text>
      </v-card>      
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Lessons",

  data: () => ({
    dialog:false,
    random:'- - - -'
  }),
  methods: {
    save: function(){
      alert('Yaddaşa yazıldı');
      window.location.href = "http://localhost:8080/lessons";
    },
    closeDialog: function(){
      
    }
    ,
    code_generator: function(){
      let min = 1000;
      let max = 9999;
      let randomCode = Math.floor(Math.random() * (+max - +min))+min;
      this.random = randomCode;
    }
  }
};
</script>
