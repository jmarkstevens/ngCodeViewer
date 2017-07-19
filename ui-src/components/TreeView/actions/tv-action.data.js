const btnColor = '#beb';

export const actionData = {
  btns: {
    newBtn: {
      buttonid: 'startNew',
      icon: 'fa fa-file-text-o fa-2x',
      classes: 'Icon',
      style: {
        color: btnColor
      }
    },
    editBtn: {
      buttonid: 'startEdit',
      icon: 'fa fa-pencil fa-2x',
      classes: 'Icon',
      style: {
        color: btnColor
      }
    },
    moveUpBtn: {
      buttonid: 'moveUp',
      icon: 'fa fa-arrow-up fa-2x',
      classes: 'Icon',
      style: {
        color: btnColor
      }
    },
    moveDownBtn: {
      buttonid: 'moveDown',
      icon: 'fa fa-arrow-down fa-2x',
      classes: 'Icon',
      style: {
        color: btnColor
      }
    },
    removeBtn: {
      buttonid: 'remove',
      icon: 'fa fa-trash-o fa-2x',
      classes: 'Icon',
      style: {
        color: btnColor
      }
    },
    cancelNewBtn: {buttonid: 'cancelNew', text: 'Cancel', classes: 'Btn'},
    cancelEditBtn: {buttonid: 'cancelEdit', text: 'Cancel', classes: 'Btn'},
    saveNewAfterBtn: {buttonid: 'saveNewAfter', text: 'Save after', classes: 'Btn'},
    saveNewBeforeBtn: {buttonid: 'saveNewBefore', text: 'Save before', classes: 'Btn'},
    saveNewChildBtn: {buttonid: 'saveNewChild', text: 'Save child', classes: 'Btn'},
    saveEditBtn: {buttonid: 'saveEdit', text: 'Save', classes: 'Btn'},
  },
  defaultNewItem:  {nodeid: '', children: [], title: '', type: ''},
  titleInput: {
    name: 'title',
    style: {width: '100%'},
    type: 'text',
    value: '',
    initValue: ''
  },
  radioInput1: {
    name: 'radioGroup',
    type: 'radio',
    radioValue: 'dev',
    value: false
  },
  radioInput2: {
    name: 'radioGroup',
    type: 'radio',
    radioValue: 'sys',
    value: false
  },
  radioInput3: {
    name: 'radioGroup',
    type: 'radio',
    radioValue: 'home',
    value: false
  },
};
