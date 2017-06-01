import renderer from 'react-test-renderer';
import Incrementor from '../Incrementor'

describe('Incrementor UI', () => {
  it('has the expected UI output', () => {
    const tree = renderer.create(<Incrementor />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});