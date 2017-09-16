<template>
  <div>
    <link href="../css/PostEntries.css"></link>
    <router-link v-if="$route.path !== '/post-entries/entry'" to="/post-entries/entry">
        <button
        class="btn btn-primary">
        Post Entry
        </button>
    </router-link>

    <div v-if="$route.path === '/post-entries/entry'">
      <h3>Post Entry</h3>     
    </div>

    <hr>

    <router-view></router-view>

    <div class="post-entries">
      <p v-if="!postEntries.length"><strong>No entries yet</strong></p>

      <div class="list-group">

        <a class="list-group-item" v-for="postEntry in postEntries">
          <div class="row">

            <div class="col-sm-2 user-details">
              <img :src="postEntry.user.image" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ postEntry.user.firstName }} 
                  {{ postEntry.user.lastName }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i> 
                {{ postEntry.post }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i> 
                {{ postEntry.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{ postEntry.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button 
                class="btn btn-xs btn-danger delete-button"
                @click="deletePostEntry(postEntry)">
                X
              </button>
            </div>

          </div>        
        </a>

      </div>
    </div>    
  </div>
</template>

<script src='../../scripts/PostEntries.js'/>
