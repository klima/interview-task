import useFetch from './useFetch';
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';

jest.mock('axios');

describe('useFetch', () => {
  const mockEndpoint = 'mockEndpoint';
  let mockResponse = { data: [] };

  beforeEach(() => {
    axios.get.mockResolvedValue(mockResponse);
  });

  it('calls axios.get with proper parameters', async () => {
    const { waitForNextUpdate } = renderHook(() => useFetch(mockEndpoint));

    await waitForNextUpdate();

    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/mockEndpoint?_start=0&_limit=15');
  });

  it('calls axios.get with proper parameters when next page', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockEndpoint));

    act(() => {
      result.current[2](2);
    });

    await waitForNextUpdate();

    expect(axios.get.mock.calls).toEqual([
      ['https://jsonplaceholder.typicode.com/mockEndpoint?_start=0&_limit=15'],
      ['https://jsonplaceholder.typicode.com/mockEndpoint?_start=15&_limit=15'],
    ]);
  });

  it('set proper response', async () => {
    mockResponse.data = [{ mock: 'mock' }];

    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockEndpoint));

    await waitForNextUpdate();

    expect(result.current[0]).toEqual([{ mock: 'mock' }]);
  });
});
