<script>

import { number, incrementNumber, decrementNumber } from '../stores/main'

</script>


<div id="NumberCounter">

    <button
        on:click={() => {decrementNumber()}} id="decrementNumber"
        class="btn"
    >
        -
    </button>
    <span>{$number}</span>
    <button 
        on:click={() => {incrementNumber()}} id="incrementNumber"
        class="btn"
    >
        +
    </button>

</div>
