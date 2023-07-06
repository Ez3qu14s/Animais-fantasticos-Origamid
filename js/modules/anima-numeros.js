export default class AnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;

      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumero() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // função que ocorre quando a mutação ocorrer
  //
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumero();
    }
  }

  // adiciona o MutationObserer para verificar
  // quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) { this.addMutationObserver(); }
    return this;
  }
}
