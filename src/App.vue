<template>
  <v-app>
   <v-container>
     <v-navigation-drawer v-model="drawer" app clipped >
       <v-container>
        <div class="v-card v-sheet v-sheet--outlined theme--light elevation-2" 
        subtitle="true" supportingtext="true" image="false" style="width: 342px;">
          <div class="d-flex align-center justify-center v-sheet theme--light grey lighten-3" style="height: 200px;">
            <img src="https://thekingdomacademy.org/wp-content/uploads/2019/02/KA_Logo.png" height="100px;" alt="">
          </div>
          <div class="v-card__title">
            Kingdom Academy
          </div>
          <hr>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/">Əsas səhifə</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-view-sequential-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/lessons">Dərslər</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-source-branch-check</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/groups">Qruplar</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-account-cowboy-hat</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/teachers">Müəllimlər</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-account-circle-outline</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/students">Tələbələr</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-grease-pencil</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/attendance">Elektron jurnal</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-ab-testing</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/exam">İmtahan nəticələri</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-bank-transfer</v-icon>
                </v-list-item-action>
                <v-list-item-title><a href="/payments">Ödənişlər</a></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </div>
       </v-container>
     </v-navigation-drawer>
     <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer" />
        <v-toolbar-title class="align-center">
          <span>Course Management System</span>
        </v-toolbar-title>
        <v-spacer/>
        <div>
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="250" offset>
            <template v-slot:activator="{on}">
              <v-avatar size="40">
                <img v-on="on" src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" alt="">
              </v-avatar>
            </template>
            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-action>
                  <v-list-item-title><a href="/">Profil</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
                  </v-list-item-action>
                  <v-list-item-title><a href="/">İstifadəçilər</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-cog</v-icon>
                  </v-list-item-action>
                  <v-list-item-title><a href="/">Tənzimləmələr</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-flag-variant</v-icon>
                  </v-list-item-action>
                  <v-list-item-title><a href="/">İstifadə qaydaları</a></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
     </v-app-bar>
   </v-container>
    <router-view/>
  <v-footer>
    <v-spacer></v-spacer>
    <div>CMS. All rights reserved. &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",


  data: () => ({
    drawer: true,
    menu: false
  })
};
</script>


<style>
#profil-image {
  max-height: 100px;
  width: auto;
}
</style>