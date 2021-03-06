export default (stateHolder, aiRepository) => {

  return (name) => {
    aiRepository.deleteScript(name);

    stateHolder.setState((state) => {
      let battleSet = state.battle.battleSet;
      battleSet.removeTankByName(name);

      /* jshint ignore:start */
      return {
        battle: {
          ...state.battle,
          battleSet: battleSet
        },
        codeRepository: {
          ...state.codeRepository,
          tankList: aiRepository.getScriptNameList()
        }
      };
      /* jshint ignore:end */
    });
  };
};
