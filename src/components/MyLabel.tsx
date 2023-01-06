import './mylabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueda
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Este es el color de la fuente
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Capitaliza el texto
   */
  allCaps?: boolean;
  /**
   * Color perzonalizado del texto
   */
  fontColor?: string;
  /**
   * Perzonaliza el color de fondo del texto
   */
  backgroundColor?: string;

}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span
      className={['label', size, `text-${color}`, fontColor].join(' ')}
      style={{
        color: fontColor,
        backgroundColor
      }}
    >
      {(allCaps) ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel;