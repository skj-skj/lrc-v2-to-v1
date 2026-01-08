function removeLRCv2Timestamp(line) {
    const timeMatch = line.match(/^\[(\d+:\d+\.\d+)\]/);
    if (timeMatch) {
        const timestamp = timeMatch[1];

        let text = line.substring(timeMatch[0].length);
        text = text.replace(/<\d+:\d+\.\d+>/g, '').trim();
        text = text.replace(/^v\d+:/i, '').trim();

        return `[${timestamp}] ${text}`;
    } else {
        return line
    }
}

function removeBGTimestamp(line) {
    const timeMatch = line.match(/^\[bg:<(\d+:\d+\.\d+)>/);
    if (timeMatch) {
        const timestamp = timeMatch[1];

        let text = line.substring(timeMatch[0].length);
        text = text.replace(/<\d+:\d+\.\d+>/g, '').trim();
        text = text.replace(/\]/g, '').trim()
        return `[${timestamp}] ${text}`;
    } else {
        return line
    }
}

function convertLrc() {
    const input = document.getElementById('inputLrc').value.trim();
    const outputSection = document.getElementById('outputSection');
    const outputTextarea = document.getElementById('outputLrc');
    const message = document.getElementById('message');

    message.className = 'message';
    message.textContent = '';

    if (!input) {
        showMessage('Please paste some LRC content first!', 'error');
        return;
    }

    try {
        const lines = input.split('\n');
        const converted = [];

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            let newLine = removeLRCv2Timestamp(line)
            newLine = removeBGTimestamp(newLine)
            converted.push(newLine)

        }

        outputTextarea.value = converted.join('\n');
        outputSection.classList.add('show');
        showMessage('Conversion successful!', 'success');
    } catch (error) {
        showMessage('Error during conversion. Please check your input.', 'error');
    }
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('outputLrc');
    outputTextarea.select();
    document.execCommand('copy');
    showMessage('Copied to clipboard!', 'success');
}

function resetConverter() {
    document.getElementById('inputLrc').value = '';
    document.getElementById('outputLrc').value = '';
    document.getElementById('outputSection').classList.remove('show');
    document.getElementById('message').className = 'message';
    document.getElementById('message').textContent = '';
}

function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `message ${type}`;

    if (type === 'success') {
        setTimeout(() => {
            message.className = 'message';
        }, 3000);
    }
}

function onClick(selector, handler) {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) {
        console.warn(`No elements found for selector: ${selector}`);
        return;
    }

    elements.forEach(el => el.addEventListener("click", handler));
}

onClick(".convert-btn", convertLrc)
onClick(".copy-btn", copyToClipboard)
onClick(".reset-btn", resetConverter)