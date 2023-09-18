import ErrorRepository from '../Error';

describe('ErrorRepository class', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  it('should translate an error code to its description', () => {
    errorRepo.addError(404, 'Not Found');
    errorRepo.addError(500, 'Internal Server Error');

    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  it('should return "Unknown error" for an unknown error code', () => {
    expect(errorRepo.translate(403)).toBe('Unknown error');
  });

  it('should return "Unknown error" when the error code is not added to the repository', () => {
    errorRepo.addError(404, 'Not Found');
    expect(errorRepo.translate(500)).toBe('Unknown error');
  });
});
