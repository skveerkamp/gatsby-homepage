exports.onInitialClientRender = () => {
  document.body.style['background-image'] = 'none';
  document.getElementsByClassName('main')[0].classList.add('loaded');
}
