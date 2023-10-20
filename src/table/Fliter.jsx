/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useImperativeHandle, useState,  useCallback, useMemo } from "react"

const Fliter = forwardRef((props, ref) => {
  const [ filterState, setFilterState ] = useState('off');
    useImperativeHandle(ref, () => {
        return {
            isFilterActive(){
                return filterState === 'on';
            },
            doesFilterPass(params){
                const field = props.colDef.field;
                return props.data[field] === filterState;
            },
            getModel(){
              return undefined;
            },
            setModel(){}
        };
    });
    useMemo(() => {props.filterChangedCallback()}, [filterState]);
    const onListener = useCallback(() => setFilterState('on'),[]);
    const offListener = useCallback(() => setFilterState('off'),[]);
      return (
          <div>
            <input type="radio" name="filter"  onChange={onListener} checked={filterState === 'on'}/>On
            <input type="radio" name="filter"  onChange={offListener} checked={filterState === 'off'}/>Off
          </div>
        // <div className="flex ">
        //   <div className="block rounded-lg shadow-lg bg-white max-w-sm">
        //     <div className="py-3  flex flex-col justify-start items-start px-5 gap-y-2 border-b border-gray-300">
        //       <p className="text-xs uppercase tracking-wide font-semibold text-slate-900">Filter by</p>
        //       <p className="capitalize text-xs leading-6 px-2 font-medium text-slate-100 tracking-wide  blue-bg rounded-2xl ">{props.title}</p>
        //     </div>
        //     <div className="flex justify-center items-center py-6 px-2 gap-2" >
        //       {props.filterOptions.map(( value => {
        //         return <div className="flex justify-center items-center">
        //           <button key={value} onClick={() => setFilterState(value)} className="capitalize text-xs font-semibold text-slate-500 tracking-wider">{value}</button>
        //         </div>
        //       }))}
        //     </div>
        //     <input checked={filterState === 'off'} onChange={offListener}/>
        //     <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
        //       2 days ago
        //     </div>
        //   </div>
        // </div>
      )
})

export default Fliter