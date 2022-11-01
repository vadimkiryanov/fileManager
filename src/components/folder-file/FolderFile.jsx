import React from 'react';
import './folder-file.scss';

const FolderFile = ({
  filterData,
  clickHandlerFolder,
  editMode,
  valueInput,
  onKeyDownValue,
  onChangeValue,
  onClickEditName,
  onClickRemoveFile,
}) => {
  return (
    <ul className="folder-list">
      {filterData.map((item, index) => {
        return (
          <li className={item.dir ? 'folder' : 'file'} key={index}>
            <span
              className="material-icons"
              onClick={item.dir ? (e) => clickHandlerFolder(e, index) : (e) => e.preventDefault()}
            >
              {item.dir ? <>&#xe2c7;</> : <>&#xe873;</>}
            </span>

            {editMode === index ? (
              <input
                className="folder-file__edit"
                value={valueInput}
                onKeyDown={(e) => onKeyDownValue(e, index)}
                onChange={(e) => onChangeValue(e)}
                type="text"
              />
            ) : (
              <span className="folder-file__name" onClick={() => onClickEditName(index, item.name)}>
                {item.name}
              </span>
            )}
            <a className="folder-file__remove" href="/" onClick={(e) => onClickRemoveFile(e, index)}>
              <svg className="folder-file__icon" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <style></style>
                </defs>
                <path
                  className="cls-1"
                  d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                />
                <path
                  className="cls-1"
                  d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z"
                />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FolderFile;
