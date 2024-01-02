import React from 'react';

// jestEmptyComponent - по сути это реакт компонент, который возвращает нам див
// Он нужен нам для того, что бы jest не ругался на импорты с расширением svg
const jestEmptyComponent = function () {
  return <div />;
};

export default jestEmptyComponent;
