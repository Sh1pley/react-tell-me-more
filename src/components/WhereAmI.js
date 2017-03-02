import React from 'react';

export default function ConfirmBattle (props) {
    return props.isLoading === true
      ? <p> Gimme a sec.. </p>
      : <p> Here you are! </p>
  
}

