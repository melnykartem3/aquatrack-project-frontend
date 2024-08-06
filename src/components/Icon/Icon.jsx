
const Icon = ({ id, className, width, height }) => {
       return (
           <svg className={className} width={width} height={height}>
               <use xlinkHref={`/src/images/favicon/icons.svg#${id}`} />
           </svg>
       );
   };

   export default Icon;