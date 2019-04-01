<template>
  <div>
    <h1>  </h1>
    <v-toolbar flat color="white">
      <v-toolbar-title>Ma liste de livres</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Ajouter un livre</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.titre" label="Entrez le titre du livre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.auteur" label="Entrez l'auteur du livre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.annee" label="Entrez l'année de parution"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.identifiant" label="Entrez le code ISBN"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.note" label="Entrez votre note sur 10"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">fermer</v-btn>
            <v-btn color="blue darken-1" flat @click="save">sauvegarder</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="livres"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.titre }}</td>
        <td class="text-xs-left">{{ props.item.auteur }}</td>
        <td class="text-xs-left">{{ props.item.annee }}</td>
        <td class="text-xs-left">{{ props.item.identifiant }}</td>
        <td class="text-xs-left">{{ props.item.note }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            medium
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            medium
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Titre',
          align: 'center',
          value: 'titre'
        },

        { text: 'Auteur',
          align: 'left', 
          value: 'auteur' 
        },

        { text: 'Année de parution',
          align: 'left',
          value: 'annee'
        },

        { text: 'Identifiant ISBN',
          align: 'left',
          value: 'identifiant'
        },

        { text: 'Note (sur 10)',
          align: 'left',
          value: 'note' },


        { text: 'Modifier/Supprimer',
          align: 'middle',
          value: 'titre',
          sortable: false 
        }
      ],
      livres: [],
      editedIndex: -1,
      editedItem: {
        titre: '',
        auteur: '',
        annee: '',
        identifiant: '',
        note: '0/10'
      },
      defaultItem: {
        titre: '',
        auteur: '',
        annee: '',
        identifiant: '',
        note: '0/10'
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Ajouter un livre' : 'Éditer le livre'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.livres = [
          {
            titre: "Clean Code",
            auteur: "Robert C. Martin",
            annee: "2008",
            identifiant: "0-13-235088-2",
            note: "10/10"
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.livres.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.livres.indexOf(item)
        confirm('Voulez-vous vraiment supprimer ce livre?') && this.livres.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.livres[this.editedIndex], this.editedItem)
        } else {
          this.livres.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>

<style>

</style>

