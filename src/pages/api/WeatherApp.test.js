import { fetchWeather } from './WeatherApp';

global.fetch = jest.fn();

describe('fetchWeather', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Deve realizar o fetch e trazer os dados para a cidade selecionada', async () => {
    const mockData = {
      main: { temp: 22 },
      weather: [{ description: 'rain' }],
      name: 'Joinville',
    };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchWeather('Joinville');

    expect(fetch).toHaveBeenCalledWith(
      'https://api.openweathermap.org/data/2.5/weather?q=Joinville&appid=3b160403fab665468371376faad5d880&units=metric'
    );
    expect(data).toEqual(mockData);
  });

  it('Deve mostrar um erro caso a cidade não seja encontrada', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchWeather('InvalidCity')).rejects.toThrow('Cidade não encontrada');
  });

  it('should handle errors during the fetch', async () => {
    fetch.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchWeather('Joinville')).rejects.toThrow('Network Error');
  });
});
