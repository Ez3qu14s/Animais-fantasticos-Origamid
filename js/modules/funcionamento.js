export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diasAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diaSemana.indexOf(this.diasAgora) !== -1;
    const horaAberto = this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1];

    return semanaAberto && horaAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
