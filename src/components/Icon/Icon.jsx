import svg from '../../images/favicon/icons.svg'

const Icon = ({ id, style, width, height }) => {
       return (
           <svg width={width} height={height} style={style}>
               <use href={`${svg}#${id}`}/>
           </svg>
       );
   };

   export default Icon;