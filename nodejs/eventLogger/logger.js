/**
 * Event-Driven Logger
 * -------------------
 * This script demonstrates how to build a simple event-driven logger in Node.js.
 * It uses Node's built-in `events` module to emit log events,
 * and writes those logs to a file while periodically reporting system memory usage.
 */

const fs = require("fs"); // For writing logs to a file
const os = require("os"); // For checking system memory stats
const EventEmitter = require("events"); // For creating and handling custom events

/**
 * Logger class that extends EventEmitter.
 * It can emit "message" events whenever log() is called.
 */
class Logger extends EventEmitter {
  /**
   * Emits a "message" event with the provided message.
   * @param {string} message - The message to log.
   */
  log(message) {
    this.emit("message", { message }); // Triggers the "message" event
  }
}

// Create a new logger instance
const logger = new Logger();

// Define the path where logs will be stored
const logFile = "./nodejs/eventLogger/eventlog.txt";

/**
 * Writes each log message to the specified file.
 * @param {object} event - The event object emitted by Logger.
 */
const logToFile = (event) => {
  // Construct a timestamped log entry
  const logMessage = `${new Date().toISOString()} - ${event.message}`;

  // Append the message to the log file
  fs.appendFileSync(logFile, logMessage);
};

// Listen for "message" events and call logToFile when they occur
logger.on("message", logToFile);

// Emit log messages every 3 seconds to report memory usage
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current Memory Usage: ${memoryUsage.toFixed(2)}%\n`);
}, 3000);

// Emit a few custom application messages
logger.log("Application started\n");
logger.log("Application event occurred\n");
