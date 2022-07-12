import { renderHook, act } from '@testing-library/react-hooks';
import useStateWithStorage from './useStateWithStorage';

describe('useCounter', () => {
  test(`Render hook with string value`, () => {
    const { result: { current: [value,] } } = renderHook(() => useStateWithStorage('key', '20000'));

    expect(value).toBe('20000');
  });

  test(`Render hook with number value`, () => {
    const { result } = renderHook(() => useStateWithStorage('key', 3));

    expect(result.current[0]).toBe(3);
  });

  test('should set new parameter', () => {
    const { result } = renderHook(() => useStateWithStorage('key',5400))

    act(() => {
      result.current[1](2)
    })
    expect(result.current[0]).toBe(2)
  })

  test('check value saved in local storage other than initial', () => {
    const { result } = renderHook(() => useStateWithStorage('key',5400))

    expect(result.current[0]).toBe(2)
  })
});
