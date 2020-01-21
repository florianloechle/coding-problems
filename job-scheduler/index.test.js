/** @format */

const { schedule } = require('./index.js');

describe('job-scheduler', () => {
  jest.useFakeTimers();

  it('executes the function after the specified delay time', () => {
    const fn = jest.fn();
    schedule(fn, 3000);
    expect(fn).not.toBeCalled();
    jest.runAllTimers();
    expect(fn).toHaveBeenCalled()
  })

  it('enables the user to cancel a job', () => {
    const fn = jest.fn();
    const cancelJob = schedule(fn, 3000);
    expect(fn).not.toBeCalled();
    cancelJob()
    jest.runAllTimers();
    expect(fn).not.toBeCalled();
  })
});
