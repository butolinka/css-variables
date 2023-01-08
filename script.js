const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}

inputs.forEach(input=>input.addEventListener('change', handleUpdate)); //adding listener to react on changes
inputs.forEach(input=>input.addEventListener('mousemove', handleUpdate)); //adding listener to react on changes when mouse is moving