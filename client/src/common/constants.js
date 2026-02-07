/**
 * Common constants used across the client application.
 *
 * ResponseCode: standard HTTP-like numeric codes for API responses.
 * StatusColor: mapping of claim statuses to UI color tokens.
 * ErrorMessage: user-facing error messages keyed by error type.
 */

/**
 * @readonly
 * @enum {number}
 */
export const ResponseCode = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  ERROR: 500,
};

/**
 * UI color tokens for claim statuses.
 * Values correspond to design system color names.
 *
 * @readonly
 * @enum {string}
 */
export const StatusColor = {
  SUBMITTED: "primary",
  APPROVED: "success",
  REJECTED: "danger",
};

/**
 * User-facing error messages.
 *
 * @readonly
 * @enum {string}
 */
export const ErrorMessage = {
  NOT_FOUND: "Claim not found",
  ERROR: "Something went wrong",
};
