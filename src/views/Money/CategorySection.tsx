import styled from 'styled-components';
import React, {FC, useState} from 'react';

const Wrapper = styled.section`
font-size: 24px;
   > ul {
   display: flex;
   background: #c4c4c4;
   > li{
   width: 50%;
   text-align: center;
   padding: 16px 0;
   position: relative;
   &.selected::after{
   content: '';
   display: block;
   height: 3px;
   background: #1296db;
   position: absolute;
   bottom: 0;
   width: 100%;
   left: 0;
   }
   }
   }
`;

const CategorySection: FC=()=>{
    const categoryMap = {'-': '支出','+': '收入'};
    type Keys = keyof typeof categoryMap
    const [categoryList] = useState<Keys[]>(['-','+']);
    const [category,setCategory] = useState('-');//+表示收入，-表示支出
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c=>
                    <li className={category === c ? 'selected' : ''} onClick={()=>{setCategory(c)}}>{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    )
};

export {CategorySection}
