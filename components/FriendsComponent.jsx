import React from 'react'
import moment from 'moment';
function FriendsComponent({ userData }) {
    // console.log(userData)
  return (
    <div class="w-full bg-white">
      <div className="grid grid-col-2">
        <div className="flex justify-around">
                  <div>{userData.friends.length}
                  <div>Friends</div>
                  </div>
                  <div>{moment(userData.createdAt).format('ll')}
                      <div>
                      Joined</div></div>
        </div>
      </div>
    </div>
  );
}

export default FriendsComponent