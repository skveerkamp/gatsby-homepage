exports.onInitialClientRender = () => {
  document.body.style['background-image'] = 'none';
  const main = document.getElementsByClassName('main');
  if (main.length > 0) {
    main[0].classList.add('loaded');
  }
}
