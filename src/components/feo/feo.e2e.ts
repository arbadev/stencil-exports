import { newE2EPage } from '@stencil/core/testing';

describe('hermano-feo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hermano-feo></hermano-feo>');

    const element = await page.find('hermano-feo');
    expect(element).toHaveClass('hydrated');
  });
});
