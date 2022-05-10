window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Cliente = window.blockly.js.blockly.Cliente || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Cliente.BuscarEnderecoArgs = [];
window.blockly.js.blockly.Cliente.BuscarEndereco = async function() {
 var dadosCEP;
  this.cronapi.util.getCEP(this.cronapi.screen.getValueOfField("Cliente.active.cep"), async function(sender_dadosCEP) {
      dadosCEP = sender_dadosCEP;
    this.cronapi.screen.changeValueOfField("Cliente.active.cidade", this.cronapi.object.getObjectField(dadosCEP, 'localidade'));
    this.cronapi.screen.changeValueOfField("Cliente.active.uf", this.cronapi.object.getObjectField(dadosCEP, 'uf'));
    this.cronapi.screen.changeValueOfField("Cliente.active.endereco", this.cronapi.object.getObjectField(dadosCEP, 'logradouro\n'));
  }.bind(this));
}
