<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title>
          Müəllimlər
          <v-spacer/>
          <v-btn class="ma-2" small color="success">
          <span><i class="fa fa-plus"></i></span>  Yeni
          </v-btn>
          <v-btn class="ma-2" @click="$router.go(-1)" small color="error">
          <span><i class="fa fa-arrow-left"></i></span> Geri
          </v-btn>  
        </v-card-title>  
        <v-card-text>
          <v-alert class="default">
            <h5>Burda müəllimlərin cədvəli olacaq</h5>
          </v-alert>
        </v-card-text>
      </v-card> 
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Teachers",

  data: () => ({
    
  })
};
</script>
