<template>
  <div class="form-horizontal">
    <link href="../css/PostEntries.css"></link>
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input 
          type="date"
          class="form-control"
          v-model="postEntry.date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <textarea 
          class="form-control"
          v-model="postEntry.entry"
        />
      </div>      
    </div>    
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input 
          type="text" 
          class="form-control"
          v-model="postEntry.comment"
          placeholder="Comment"
        />
      </div>        
    </div>    
    <button class="btn btn-primary" @click="save()">Save</button>
    <button v-link="'/post-entries'" class="btn btn-danger">Cancel</button>    
    <hr>
  </div>

</template>

<script src='../../scripts/PostEntry.js'/>