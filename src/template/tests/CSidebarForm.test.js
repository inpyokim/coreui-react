import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CSidebarForm from '../CSidebarForm'

configure({ adapter: new Adapter() })

describe('CSidebarForm', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CSidebarForm/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CSidebarForm
        className='class-name'
      >
        CSidebarForm
      </CSidebarForm>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
