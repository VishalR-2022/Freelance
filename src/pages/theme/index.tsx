import Buttons from './Buttons';
import ColorPalette from './ColorPalette';
import Headings from './Headings';
import Inputs from './Inputs';
import Utilities from './Utilities';

function theme() {
  const colorTheme: string = 'light';
  return (
    <div className="scale-75" data-theme={colorTheme}>
      <div className="grid grid-cols-1 text-base-content md:grid-cols-2 lg:grid-cols-3">
        <ColorPalette />
        <Utilities />
        <Buttons />
        <Inputs />
        <Headings />
      </div>
    </div>
  );
}

export default theme;
