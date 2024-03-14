function MovingTitle(writeText, interval, visibleLetters) {
    var _instance = {};
    var _isPaused = false;
    var _currId = 0;
    var _numberOfLetters = writeText.length;
    var _timeoutId; // To store the timeout ID for pausing

    function updateTitle() {
        if (!_isPaused) {
            _currId += 1;
            if (_currId > _numberOfLetters - 1) {
                _currId = 0;
                pauseRotation();
            }

            var startId = _currId;
            var endId = startId + visibleLetters;
            var finalText;
            if (endId < _numberOfLetters - 1) {
                finalText = writeText.substring(startId, endId);
            } else {
                var cappedEndId = _numberOfLetters;
                endId = endId - cappedEndId;

                finalText = writeText.substring(startId, cappedEndId) + writeText.substring(0, endId);
            }

            document.title = finalText;
        }
    }

    function pauseRotation() {
        _isPaused = true;
        _timeoutId = setTimeout(function () {
            _isPaused = false;
        }, 2000); // Pause for 2 seconds
    }

    _instance.init = function () {
        setInterval(updateTitle, interval);
    };

    return _instance;
}

var title = new MovingTitle("cbevel.dev", 500, 10);
setTimeout(() => {title.init();}, 2000);
