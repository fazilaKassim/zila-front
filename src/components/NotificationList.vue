<template>
  <div class="notifications-list">
<notification-Message />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";  
export default {

components:{
    NotificationMessage
}
}
</script>

<style>
.notifications-list{
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width:320px ;
}
</style>