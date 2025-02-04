package oceanusproject.demov1.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.io.InputStream;

// This API is only used for HTTP-based validation of SSL certificate
//@Controller
//@RequestMapping("/.well-known")
public class DCVFileController {
    @Autowired
    ResourceLoader resourceLoader;

    @GetMapping(value = "pki-validation/{DCVFile}")
    public ResponseEntity<byte[]> getDCVFile(@PathVariable("DCVFile") String DCVFile) throws IOException {
        Resource resource = resourceLoader.getResource("classpath:static/DCVFile/" + DCVFile);
        InputStream input = resource.getInputStream();
        byte[] text = IOUtils.toByteArray(input);
        return ResponseEntity.ok().contentType(MediaType.TEXT_PLAIN).body(text);
    }
}
