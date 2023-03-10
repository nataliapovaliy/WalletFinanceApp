import { ContainerModal, ContentModal } from './ModalAddStyled';
import sprite from '../../iconsSprite/icons.svg';
import { SvgClose } from './ModalAddStyled';
import AddComponent from './ComponentAdd';

import { useEffect } from 'react';
import {
  Header,
  Switch,
  Span,
  SvgPlus,
  Checkbox,
  DivChekbox,
  SvgMinus,
} from './StyledContent';

import { useState } from 'react';
import {
  addOneTransaction,
  closeModalAddTransaction,
} from 'redux/transactionsController/slice';
import { useDispatch, useSelector } from 'react-redux';
import { didUpdate } from 'redux/transactionsController/selectors';
// import { selectIsModalAddTransactionOpen } from 'redux/transactionsController/selectors';
const ModalAdd = ({ active }) => {
  // dispatch(addOneTransaction(null));
  const isShow = useSelector(didUpdate);

  const [add, getAdd] = useState(true);

  const dispatch = useDispatch();

  const closeModalFu = () => {
    dispatch(addOneTransaction(null));
    dispatch(closeModalAddTransaction());
  };

  useEffect(() => {
    const escapeModal = event => {
      if (event.code === 'Escape') {
        event.preventDefault();

        closeModalFu();
      }
    };
    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  });
  return (
    <ContainerModal
      className={active ? 'ContainerModal active' : 'ContainerModal'}
      onClick={() => closeModalFu()}
    >
      <ContentModal
        className={active ? 'ContentModal active' : 'ContentModal'}
        onClick={e => e.stopPropagation()}
      >
        <SvgClose width="25" height="25" onClick={() => closeModalFu()}>
          <use href={sprite + '#iconclose'} width="25" height="25"></use>
        </SvgClose>
        <Header>
          <h2>{!isShow ? 'Add transaction' : 'Update transaction'}</h2>
        </Header>
        <div>
          {!isShow && (
            <DivChekbox className="RadioBtn">
              {add ? (
                <p>Income</p>
              ) : (
                <p
                  style={{
                    color: '#24CCA7',
                  }}
                >
                  Income
                </p>
              )}
              {add ? (
                <Switch className="switch">
                  <Checkbox
                    className="Checkbox"
                    type="checkbox"
                    defaultChecked="checked"
                    onClick={() => getAdd(false)}
                  />
                  <Span className="slider round">
                    <SvgPlus width="25" height="25">
                      <use
                        href={sprite + '#iconplus'}
                        width="25"
                        height="25"
                      ></use>
                    </SvgPlus>
                    <SvgMinus width="25" height="25">
                      <use href={sprite + '#iconuntitled'} width="20"></use>
                    </SvgMinus>
                  </Span>
                </Switch>
              ) : (
                <Switch className="switch">
                  <Checkbox
                    className="Checkbox"
                    type="checkbox"
                   
                    onClick={() => getAdd(true)}
                  />
                  <Span className="slider round">
                    <SvgPlus width="25" height="25">
                      <use
                        href={sprite + '#iconplus'}
                        width="25"
                        height="25"
                      ></use>
                    </SvgPlus>
                    <SvgMinus width="25" height="25">
                      <use href={sprite + '#iconuntitled'} width="20"></use>
                    </SvgMinus>
                  </Span>
                </Switch>
              )}

              {add ? (
                <p
                  style={{
                    color: '#FF6596',
                  }}
                >
                  Expense
                </p>
              ) : (
                <p>Expense</p>
              )}
            </DivChekbox>
          )}
          {/* <DivChekbox className="RadioBtn">
            {add ? (
              <p
              
              >
                Income
              </p>
            ) : (
              <p  style={{
                color: '#24CCA7',
              }}>Income</p>
            )}
            {add ? (
              <Switch className="switch">
                <Checkbox
                  className="Checkbox"
                  type="checkbox"
                  defaultChecked="checked"
                  onClick={() => getAdd(false)}
                />
                <Span className="slider round">
                  <SvgPlus width="25" height="25">
                    <use
                      href={sprite + '#iconplus'}
                      width="25"
                      height="25"
                    ></use>
                  </SvgPlus>
                  <SvgMinus width="25" height="25">
                    <use href={sprite + '#iconuntitled'} width="20"></use>
                  </SvgMinus>
                </Span>
              </Switch>
            ) : (
              <Switch className="switch">
                <Checkbox
                  className="Checkbox"
                  type="checkbox"
                  
                  onClick={() => getAdd(true)}
                />
                <Span className="slider round">
                  <SvgPlus width="25" height="25">
                    <use
                      href={sprite + '#iconplus'}
                      width="25"
                      height="25"
                    ></use>
                  </SvgPlus>
                  <SvgMinus width="25" height="25">
                    <use href={sprite + '#iconuntitled'} width="20"></use>
                  </SvgMinus>
                </Span>
              </Switch>
            )}

            {add ? (
              <p   style={{
                  color: '#FF6596',
                }}>Expense</p>
            ) : (
              <p
              
              >
                Expense
              </p>
            )}
          </DivChekbox> */}
          <AddComponent seting={add} fn={getAdd} />
        </div>
      </ContentModal>
    </ContainerModal>
  );
};
export default ModalAdd;
