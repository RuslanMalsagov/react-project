// Этот файл нам необходим что бы тайпскрипт понимал
// какой тип нужно импортировать из файлов
// без этого файла иммпорты css модулей выдают ошибку
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
